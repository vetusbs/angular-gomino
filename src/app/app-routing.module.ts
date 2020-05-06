import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { DominoComponent } from './domino/domino.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/auth.guard';

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot([
        { path: '', component: DominoComponent, canActivate: [AuthGuard] },
        { path: 'login', component: LoginComponent },
      ])
  ]
})

export class AppRoutingModule {
}