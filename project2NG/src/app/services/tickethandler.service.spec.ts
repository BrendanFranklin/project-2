import { TestBed } from '@angular/core/testing';

import { TickethandlerService } from './tickethandler.service';

describe('TickethandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TickethandlerService = TestBed.get(TickethandlerService);
    expect(service).toBeTruthy();
  });
});
