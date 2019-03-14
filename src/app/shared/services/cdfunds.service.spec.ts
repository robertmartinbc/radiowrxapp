import { TestBed } from '@angular/core/testing';

import { CdfundsService } from './cdfunds.service';

describe('CdfundsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CdfundsService = TestBed.get(CdfundsService);
    expect(service).toBeTruthy();
  });
});
