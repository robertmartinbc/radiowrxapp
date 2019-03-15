import { TestBed } from '@angular/core/testing';

import { BandsbyfansService } from './bandsbyfans.service';

describe('BandsbyfansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BandsbyfansService = TestBed.get(BandsbyfansService);
    expect(service).toBeTruthy();
  });
});
