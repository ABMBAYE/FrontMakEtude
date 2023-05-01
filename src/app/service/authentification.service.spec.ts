import { TestBed } from '@angular/core/testing';

import { AuthentificatonService } from './authentification.service';

describe('AuthentificatonService', () => {
  let service: AuthentificatonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificatonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
