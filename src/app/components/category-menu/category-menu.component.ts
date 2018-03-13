import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'hww-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit, AfterViewInit {

  constructor() { }

  public categories: string[] = ['HOTEL', 'FISHING', 'TOURS', 'WEATHER'];

  public choosenCategory: string;

  @Output()
  public choose: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.choosenCategory = 'FISHING';
  }

  ngAfterViewInit() {
    this.choose.emit(this.choosenCategory);
  }

  chooseCategory(value: string) {
    this.choosenCategory = value;
    this.choose.emit(this.choosenCategory);
  }
}
