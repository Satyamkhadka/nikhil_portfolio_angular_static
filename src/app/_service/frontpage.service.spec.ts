import { TestBed } from '@angular/core/testing';

import { FrontpageService } from './frontpage.service';

describe('FrontpageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrontpageService = TestBed.get(FrontpageService);
    expect(service).toBeTruthy();
  });
});
