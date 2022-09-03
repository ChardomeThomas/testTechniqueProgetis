import { TestBed } from '@angular/core/testing';

import { AsteroideApiService } from './asteroide-api.service';

describe('AsteroideApiService', () => {
  let service: AsteroideApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsteroideApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
