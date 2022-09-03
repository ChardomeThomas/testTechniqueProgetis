import { TestBed } from '@angular/core/testing';

import { NasaApiService } from './apod-api.service';

describe('NasaApiService', () => {
  let service: NasaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
