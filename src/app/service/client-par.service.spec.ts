import { TestBed } from '@angular/core/testing';

import { ClientParService } from './client-par.service';

describe('ClientParService', () => {
  let service: ClientParService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientParService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
