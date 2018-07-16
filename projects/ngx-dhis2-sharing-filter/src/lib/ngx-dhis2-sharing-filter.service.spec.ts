import { TestBed, inject } from '@angular/core/testing';

import { NgxDhis2SharingFilterService } from './ngx-dhis2-sharing-filter.service';

describe('NgxDhis2SharingFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxDhis2SharingFilterService]
    });
  });

  it('should be created', inject([NgxDhis2SharingFilterService], (service: NgxDhis2SharingFilterService) => {
    expect(service).toBeTruthy();
  }));
});
