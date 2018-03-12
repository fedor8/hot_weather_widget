import {Component, Input, OnInit} from '@angular/core';
import {WeatherForcast} from "../../classes/resort";

@Component({
  selector: 'hww-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input()
  public weatherForcast: WeatherForcast;

  constructor() { }

  ngOnInit() {
  }

}
