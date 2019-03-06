import { TestBed } from '@angular/core/testing';

import { ApartmentHandlerService } from './apartment-handler.service';

describe('ApartmentHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApartmentHandlerService = TestBed.get(ApartmentHandlerService);
    expect(service).toBeTruthy();
  });
});
