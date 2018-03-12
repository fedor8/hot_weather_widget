import {Component, OnInit} from '@angular/core';
import {Resort} from './classes/resort';
import {ResortsService} from './services/resorts.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hot Weather Widget';

  public resorts: Observable<Resort[]>;

  public category: string;
  public resort: Resort;

  public constructor(private _resortsService: ResortsService) {

  }

  ngOnInit(): void {
    this.resorts = this._resortsService.getResorts$();
  }

  chooseCategory(category: string): void {
    this.category = category;
  }
}

