import { TestBed } from '@angular/core/testing';

import { ApisListServiceService } from './apis-list-service.service';

describe('ApisListServiceService', () => {
  let service: ApisListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApisListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
