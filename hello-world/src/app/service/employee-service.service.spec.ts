import { TestBed } from '@angular/core/testing';

import { EmployeeSErviceService } from './employee-service.service';

describe('EmployeeSErviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeSErviceService = TestBed.get(EmployeeSErviceService);
    expect(service).toBeTruthy();
  });
});
