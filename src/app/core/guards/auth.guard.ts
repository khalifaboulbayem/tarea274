import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '@data/services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserService);
  const router = inject(Router);
  if (authService.isLoggedIn()) {
    return true
  }
  return router.parseUrl('/login');
};
