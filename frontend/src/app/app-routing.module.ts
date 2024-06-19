import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { authGuard } from './auth/auth.guard';

const routes: Routes = [{
  path: 'auth',
  // loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  // canActivate: [authGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
