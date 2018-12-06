import { TestBed } from '@angular/core/testing';

import { SimpleLoginService } from './simple-login.service';

describe('SimpleLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleLoginService = TestBed.get(SimpleLoginService);
    expect(service).toBeTruthy();
  });
});
