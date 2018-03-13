import {Component, Input, OnInit} from '@angular/core';
import {Resort} from "../../classes/resort";

@Component({
  selector: 'hww-resort-main-picture',
  templateUrl: './resort-main-picture.component.html',
  styleUrls: ['./resort-main-picture.component.css']
})
export class ResortMainPictureComponent implements OnInit {

  @Input() resort: Resort;

  constructor() { }

  ngOnInit() {
  }

}
