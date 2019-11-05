import { TestBed } from '@angular/core/testing';

import { GitServiceService } from './git-service.service';

describe('GitServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitServiceService = TestBed.get(GitServiceService);
    expect(service).toBeTruthy();
  });
});
