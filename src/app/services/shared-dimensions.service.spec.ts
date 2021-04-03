import { TestBed } from '@angular/core/testing';

import { SharedDimensionsService } from './shared-dimensions.service';

describe('SharedDimensionsService', () => {
  let service: SharedDimensionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedDimensionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
