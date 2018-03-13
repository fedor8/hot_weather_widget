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
  public resorts: Resort[];

  private _category: string;

  @Input()
  public set category(category: string) {
    this._category = category;
    const filtered = this._resortFilterPipe.transform(this.resorts, this._category);
    if (filtered) {
      this.chooseResort(filtered[0]);
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
    this.resortsSubscription = this._resortService.resorts$.subscribe((resortsArray: Resort[]) => {
      this.resorts = resortsArray;
      const filtered = this._resortFilterPipe.transform(resortsArray, this._category);
      if (filtered) {
        this.chooseResort(filtered[0]);
      }
      this.resortsSubscription.unsubscribe();
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
