import {Component, OnDestroy, OnInit, WrappedValue} from '@angular/core';
import {Resort} from './classes/resort';
import {ResortsService} from './services/resorts.service';
import {Observable} from 'rxjs/Observable';
import {ResortFilterPipe} from "./pipes/resort-filter.pipe";
import {AsyncPipe} from "@angular/common";
import {Subscription} from "rxjs/Subscription";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ResortFilterPipe, AsyncPipe]
})
export class AppComponent implements OnInit {

  public resort: Resort;

  public constructor(
    private _translate: TranslateService
  ) {
    _translate.setDefaultLang('ru');
    _translate.addLangs(['ru', 'en']);
  }

  ngOnInit(): void {
  }

}

