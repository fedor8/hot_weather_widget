import {Component, Input, OnInit} from '@angular/core';
import {Resort} from '../../classes/resort';

@Component({
  selector: 'hww-resort-small-card',
  templateUrl: './resort-small-card.component.html',
  styleUrls: ['./resort-small-card.component.css']
})
export class ResortSmallCardComponent implements OnInit {

  @Input()
  public resort: Resort;

  constructor() { }

  ngOnInit() {
  }

}
