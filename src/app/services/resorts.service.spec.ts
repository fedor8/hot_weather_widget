/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResortsService } from './resorts.service';

describe('ResortsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResortsService]
    });
  });

  it('should ...', inject([ResortsService], (service: ResortsService) => {
    expect(service).toBeTruthy();
  }));
});
