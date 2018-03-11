import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Resort} from '../../resort';


@Component({
  selector: 'hww-resort-list',
  templateUrl: './resort-list.component.html',
  styleUrls: ['./resort-list.component.css']
})
export class ResortListComponent implements OnInit {

  @Input()
  public resorts: Observable<Resort[]>;

  constructor() { }

  ngOnInit() {
  }

}
