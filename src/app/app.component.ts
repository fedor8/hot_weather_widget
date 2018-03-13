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
  title = 'Hot Weather Widget';

  public resorts: Observable<Resort[]>;

  public category: string;
  public resort: Resort;

  public constructor(
    private _resortsService: ResortsService,
    private _resortFilterPipe: ResortFilterPipe,
    private _asyncPipe: AsyncPipe,
    private _translate: TranslateService
  ) {
    _translate.setDefaultLang('ru');
    _translate.addLangs(['ru', 'en']);
  }

  ngOnInit(): void {
    this.resorts = this._resortsService.resorts$;
  }

  chooseCategory(category: string): void {
    this.category = category;
    console.log('resorts', this.resorts);
    let syncResorts = this._asyncPipe.transform(this.resorts);
    console.log('syncResorts', syncResorts);
    // TODO слишком сложно и странный WrappedValue приходит при первом вызове. Как сделать проще?
    if (syncResorts && syncResorts instanceof WrappedValue) {
      syncResorts = syncResorts.wrapped;
    }
    const filteredResorts: Resort[] = this._resortFilterPipe.transform(syncResorts, category);
    if (filteredResorts && Array.isArray(filteredResorts) && !filteredResorts.includes(this.resort)) {
      this.resort = filteredResorts[0];
    }
  }
}

