import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { NoAuthModule } from './pages/no-auth/no-auth.module';

const routes: Routes = [{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  canActivate: [authGuard] // Use authGuard here
},
{
  path: 'no-auth',
  loadChildren: () => import('./pages/no-auth/no-auth.module').then(m => m.NoAuthModule),
  // canActivate: [authGuard] // Use authGuard here
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
