import { CanActivateFn } from '@angular/router';

export const authGuradsGuard: CanActivateFn = (route, state) => {
  return true;
};
