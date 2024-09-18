import { TestBed } from '@angular/core/testing';

import { TypeOfMarkerServiceService } from './type-of-marker-service.service';

describe('TypeOfMarkerServiceService', () => {
  let service: TypeOfMarkerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeOfMarkerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
