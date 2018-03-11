import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortCardComponent } from './resort-card.component';

describe('ResortCardComponent', () => {
  let component: ResortCardComponent;
  let fixture: ComponentFixture<ResortCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
