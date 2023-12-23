import { TestBed } from '@angular/core/testing';

import { OsiServiceService } from './osi-service.service';

describe('OsiServiceService', () => {
  let service: OsiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OsiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
