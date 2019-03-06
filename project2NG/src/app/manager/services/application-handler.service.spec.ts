import { TestBed } from '@angular/core/testing';

import { ApplicationHandlerService } from './application-handler.service';

describe('ApplicationHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationHandlerService = TestBed.get(ApplicationHandlerService);
    expect(service).toBeTruthy();
  });
});
