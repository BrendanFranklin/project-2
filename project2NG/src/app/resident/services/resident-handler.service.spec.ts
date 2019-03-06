import { TestBed } from '@angular/core/testing';

import { ResidentHandlerService } from './resident-handler.service';

describe('ResidentHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResidentHandlerService = TestBed.get(ResidentHandlerService);
    expect(service).toBeTruthy();
  });
});
