import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';

export interface Place {
  address: string;
  phoneNumber: string;
  name: string;
  picture: string;
}

export interface WeatherForcast {
  airTemperature: number;
  precipitation: AtmosphereCondition;
  waterTemperature: number;
}

export interface SocialMedia {
  followers: number;
  following: number;
}

export enum AtmosphereCondition {
  Snow,
  Rain,
  Sun,
  Cloudy,
  Hurricane
}

export class Resort implements Place {
  categories: string[];
  address: string;
  phoneNumber: string;
  name: string;
  picture: string;
  extraPictures: string[];
  weatherForcast: WeatherForcast;
  socialMedia: SocialMedia;
}
