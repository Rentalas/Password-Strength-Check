import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordAnnotation } from '../password-strength-constants';
import { PasswordStrengthCheckService } from '../password-strength-check.service';

@Component({
  selector: 'password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true,
    }
  ]
})

export class PasswordComponent implements ControlValueAccessor{
  hide: boolean = true;
  passwordControl = new FormControl('');
  password: string;
  passwordAnnotation: PasswordAnnotation;

  private onChange = (password: string) => {};
  private onTouched: () => void;

  constructor(private passwordStrengthCheckService: PasswordStrengthCheckService) {
  }

  onPasswordChange(): void {
    const password = this.passwordControl.value;
    this.passwordAnnotation = this.passwordStrengthCheckService.checkPassword(password);
    this.writeValue(password);
    this.onChange(password);
  }

  writeValue(password: string): void {
    this.password = password;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}


