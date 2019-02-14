import { TestBed } from '@angular/core/testing';

import { RentHandlerService } from './rent-handler.service';

describe('RentHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RentHandlerService = TestBed.get(RentHandlerService);
    expect(service).toBeTruthy();
  });
});
