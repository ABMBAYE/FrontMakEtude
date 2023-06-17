import { TestBed } from '@angular/core/testing';

import { MaketudeGuard } from './maketude.guard';

describe('MaketudeGuard', () => {
  let guard: MaketudeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MaketudeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
