import { Injectable } from '@angular/core';
import {Resort} from '../classes/resort';
import {Observable} from 'rxjs/Observable';
import {delay} from 'rxjs/operators';
import {RESORTS} from './resorts.mock';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ResortsService {
  private RESORTS_URL = './assets/resorts.mock.json';

  private choosenCategorySource = new Subject<String>();
  choosenCategory$ = this.choosenCategorySource.asObservable();

  constructor(private _http: HttpClient) { }

  public get resorts$(): Observable<Resort[]> {
    return this._http.get<Resort[]>(this.RESORTS_URL).pipe(delay(3000));
  }

}


