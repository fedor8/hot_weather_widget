/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResortListComponent } from './resort-list.component';

describe('ResortListComponent', () => {
  let component: ResortListComponent;
  let fixture: ComponentFixture<ResortListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
