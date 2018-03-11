import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/observable/from";
import {delay} from "rxjs/operators";

export interface Place{
  address: string;
  phoneNumber: string;
  name: string;
  picture: string;
}

export interface WeatherForcast{
  airTemperature: number;
  precipitation: AtmosphereCondition;
  waterTemperature: number;
}

export interface SocialMedia{
  followers: number;
  following: number;
}

export enum AtmosphereCondition{
  Snow,
  Rain,
  Sun,
  Cloudy,
  Hurricane
}

export class Resort implements Place {
  address: string;
  phoneNumber: string;
  name: string;
  picture: string;
  weatherForcast: WeatherForcast;
  socialMedia: SocialMedia;
}
