import { TestBed } from '@angular/core/testing';

import { UsrDataService } from './usr-data.service';

describe('UsrDataService', () => {
  let service: UsrDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsrDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
