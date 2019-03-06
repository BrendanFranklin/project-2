import { TestBed } from '@angular/core/testing';

import { ProspecthandlerService } from './prospecthandler.service';

describe('ProspecthandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProspecthandlerService = TestBed.get(ProspecthandlerService);
    expect(service).toBeTruthy();
  });
});
