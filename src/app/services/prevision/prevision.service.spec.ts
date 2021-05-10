import { TestBed } from '@angular/core/testing';

import { PrevisionService } from './prevision.service';

describe('PrevisionService', () => {
  let service: PrevisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrevisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
