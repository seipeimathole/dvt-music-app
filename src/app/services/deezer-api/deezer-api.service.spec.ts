import { TestBed } from '@angular/core/testing';

import { DeezerAPIService } from './deezer-api.service';

describe('DeezerAPIService', () => {
  let service: DeezerAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeezerAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
