import { Injectable } from '@angular/core';
import {Resort} from '../classes/resort';
import {Observable} from 'rxjs/Observable';
import {delay} from 'rxjs/operators';
import {RESORTS} from './resorts.mock';
import {Subject} from "rxjs/Subject";

export class ResortsService {

  private choosenResortSource = new Subject<Resort>();
  choosenResort$ = this.choosenResortSource.asObservable();

  constructor() { }

  public get resorts$(): Observable<Resort[]> {
    return Observable.of(RESORTS).pipe(
      delay(3000)
    );
  }

  public get resorts(): Resort[] {
    return RESORTS;
  }
}


