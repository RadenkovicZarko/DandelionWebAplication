import { TestBed } from '@angular/core/testing';

import { EntityExtractionApiService } from './entity-extraction-api.service';

describe('EntityExtractionApiService', () => {
  let service: EntityExtractionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityExtractionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
