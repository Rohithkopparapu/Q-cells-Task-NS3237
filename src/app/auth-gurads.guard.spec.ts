import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authGuradsGuard } from './auth-gurads.guard';

describe('authGuradsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuradsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
