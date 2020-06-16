import { TestBed } from '@angular/core/testing';

import { UserbooklibraryService } from './userbooklibrary.service';

describe('UserbooklibraryService', () => {
  let service: UserbooklibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserbooklibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
