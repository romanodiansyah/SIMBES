import { TestBed } from '@angular/core/testing';

import { BeasiswaService } from './beasiswa.service';

describe('BeasiswaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeasiswaService = TestBed.get(BeasiswaService);
    expect(service).toBeTruthy();
  });
});
