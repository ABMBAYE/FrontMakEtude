import { TestBed } from '@angular/core/testing';

import { GerantGuard } from './gerant.guard';

describe('GerantGuard', () => {
  let guard: GerantGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GerantGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
