import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PasswordComponent } from './password/password.component';
import { PasswordStrengthIndicatorComponent } from './password-strength-indicator/password-strength-indicator.component';

@NgModule({
  declarations: [PasswordComponent, PasswordStrengthIndicatorComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ]
})
export class PasswordModule { }
