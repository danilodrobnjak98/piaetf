import { TestBed } from '@angular/core/testing';

import { ServisPrviService } from './servis-prvi.service';

describe('ServisPrviService', () => {
  let service: ServisPrviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServisPrviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
