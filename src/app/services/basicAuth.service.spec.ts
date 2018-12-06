import { TestBed } from '@angular/core/testing';

import { BasicAuthService } from './basicAuth.service';

describe('BasicAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicAuthService = TestBed.get(BasicAuthService);
    expect(service).toBeTruthy();
  });
});
