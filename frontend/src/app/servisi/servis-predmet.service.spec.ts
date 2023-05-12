import { TestBed } from '@angular/core/testing';

import { ServisPredmetService } from './servis-predmet.service';

describe('ServisPredmetService', () => {
  let service: ServisPredmetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServisPredmetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
