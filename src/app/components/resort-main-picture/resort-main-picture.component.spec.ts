import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortMainPictureComponent } from './resort-main-picture.component';

describe('ResortMainPictureComponent', () => {
  let component: ResortMainPictureComponent;
  let fixture: ComponentFixture<ResortMainPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortMainPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortMainPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
