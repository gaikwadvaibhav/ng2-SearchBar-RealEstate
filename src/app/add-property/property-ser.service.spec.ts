import { TestBed, inject } from '@angular/core/testing';

import { PropertySerService } from './property-ser.service';

describe('PropertySerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertySerService]
    });
  });

  it('should be created', inject([PropertySerService], (service: PropertySerService) => {
    expect(service).toBeTruthy();
  }));
});
