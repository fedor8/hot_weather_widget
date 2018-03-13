import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, WrappedValue} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Resort} from '../../classes/resort';
import {ResortsService} from '../../services/resorts.service';
import {Subscription} from 'rxjs/Subscription';
import {ResortFilterPipe} from '../../pipes/resort-filter.pipe';
import {AsyncPipe} from "@angular/common";


@Component({
  selector: 'hww-resort-list',
  templateUrl: './resort-list.component.html',
  styleUrls: ['./resort-list.component.css']
})
export class ResortListComponent implements OnInit, OnDestroy {

  private resortsSubscription: Subscription;
  public resorts$: Observable<Resort[]>;

  private _category: string;

  @Input()
  public set category(category: string) {
    this._category = category;
    console.log('resorts', this.resorts$);
    let syncResorts = this._asyncPipe.transform(this.resorts$);
    console.log('syncResorts', syncResorts);
    // TODO слишком сложно и странный WrappedValue приходит при первом вызове. Как сделать проще?
    if (syncResorts && syncResorts instanceof WrappedValue) {
      syncResorts = WrappedValue.unwrap(syncResorts);
    }
    const filteredResorts: Resort[] = this._resortFilterPipe.transform(syncResorts, this._category);
    if (filteredResorts && Array.isArray(filteredResorts) && !filteredResorts.includes(this.choosenResort)) {
      this.chooseResort(filteredResorts[0]);
    }
  }

  public get category(): string {
    return this._category;
  }

  @Output()
  public choose: EventEmitter<Resort> = new EventEmitter();

  @Input()
  private choosenResort: Resort;

  constructor(private _resortService: ResortsService,
              private _resortFilterPipe: ResortFilterPipe,
              private _asyncPipe: AsyncPipe) {
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
    console.log('chooseResort', resort);
    this.choosenResort = resort;
    this.choose.emit(resort);
  }

  ngOnDestroy(): void {
    this.resortsSubscription.unsubscribe();
  }
}
