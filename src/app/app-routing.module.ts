import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordStrengthCheck } from './password-strength-check/password-strength-check.component';

const routes: Routes = [
  {path: '', component: PasswordStrengthCheck},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }