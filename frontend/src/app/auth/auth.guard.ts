import { CanActivateFn } from '@angular/router';
import { AdminService } from '../shared/services/admin.service';

import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true;

  constructor(
    private _adminService: AdminService,
    private router: Router
  ) {}

  if(this._adminService.isLoggedIn()) {
    return true;
  } else {
    this.router.navigate(['/auth/login']);
    return false;
  }
  
};
