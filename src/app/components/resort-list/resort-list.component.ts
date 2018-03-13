import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Resort} from '../../classes/resort';
import {ResortsService} from "../../services/resorts.service";
import {Subscription} from "rxjs/Subscription";
import {ResortFilterPipe} from "../../pipes/resort-filter.pipe";


@Component({
  selector: 'hww-resort-list',
  templateUrl: './resort-list.component.html',
  styleUrls: ['./resort-list.component.css']
})
export class ResortListComponent implements OnInit, OnDestroy {

  private resortsSubscription: Subscription;
  public resorts$: Observable<Resort[]>;

  @Input()
  public category: string;

  @Output()
  public choose: EventEmitter<Resort> = new EventEmitter();

  @Input()
  private choosenResort: Resort;

  constructor(private _resortService: ResortsService,
              private _resortFilterPipe: ResortFilterPipe) {
  }

  ngOnInit() {
    this.resorts$ = this._resortService.resorts$;
    this.resortsSubscription = this._resortService.resorts$.subscribe((resortsArray: Resort[]) => {
      const filtered = this._resortFilterPipe.transform(resortsArray, this.category);
      if (filtered) {
        this.chooseResort(filtered[0]);
      }
    });
  }

  chooseResort(resort: Resort) {
    this.choosenResort = resort;
    this.choose.emit(resort);
  }

  ngOnDestroy(): void {
    this.resortsSubscription.unsubscribe();
  }
}
