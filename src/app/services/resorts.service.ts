import { Injectable } from '@angular/core';
import {Resort} from '../classes/resort';
import {Observable} from 'rxjs/Observable';
import {delay} from 'rxjs/operators';
import {RESORTS} from './resorts.mock';

export class ResortsService {

  constructor() { }

  public getResorts$(): Observable<Resort[]> {
    return RESORTS$;
  }

  public getResorts(): Resort[] {
    return RESORTS;
  }
}

const RESORTS$: Observable<Resort[]> = Observable.of(RESORTS).pipe(
  delay(3000)
);
