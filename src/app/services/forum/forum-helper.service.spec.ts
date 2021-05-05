import { TestBed } from '@angular/core/testing';

import { ForumHelperService } from './forum-helper.service';

describe('ForumHelperService', () => {
  let service: ForumHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
