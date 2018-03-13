import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Resort} from '../../classes/resort';
import {ResortsService} from "../../services/resorts.service";


@Component({
  selector: 'hww-resort-list',
  templateUrl: './resort-list.component.html',
  styleUrls: ['./resort-list.component.css']
})
export class ResortListComponent implements OnInit {

  public resorts: Observable<Resort[]>;

  @Input()
  public category: string;

  @Output()
  public choose: EventEmitter<Resort> = new EventEmitter();

  @Input()
  private choosenResort: Resort;

  constructor(private _resortService: ResortsService) {
  }

  ngOnInit() {
    this.resorts = this._resortService.resorts$;
  }

  chooseResort(resort: Resort) {
    this.choosenResort = resort;
    this.choose.emit(resort);
  }
}
