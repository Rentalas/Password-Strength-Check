import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordAnnotation } from '../password-strength-constants';
import { PasswordStrengthService } from '../password-strength.service';

@Component({
  selector: 'password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true
    }
  ]
})

export class PasswordComponent implements ControlValueAccessor{
  passwordControl = new FormControl('');
  hidePassword: boolean = true;
  password: string;
  passwordAnnotation: PasswordAnnotation;

  private onChange = (password: string) => {};
  private onTouched = () => {};

  constructor(private passwordStrengthService: PasswordStrengthService) {
  }

  onPasswordChange(): void {
    const password = this.passwordControl.value;
    this.passwordAnnotation = this.passwordStrengthService.checkPassword(password);

    this.onChange(password);
  }

  writeValue(value: string): void {
    this.passwordControl.setValue(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}


