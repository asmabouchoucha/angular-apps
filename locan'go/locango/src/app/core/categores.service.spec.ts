import { TestBed, inject } from '@angular/core/testing';

import { CategoresService } from './categores.service';

describe('CategoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoresService]
    });
  });

  it('should be created', inject([CategoresService], (service: CategoresService) => {
    expect(service).toBeTruthy();
  }));
});
