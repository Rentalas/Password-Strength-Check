import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

export enum PasswordAnnotation {
  empty = '',
  lessCharacters = 'Password must be more than 8 characters',
  easy = 'Password is easy',
  medium = 'Password is medium',
  strong = 'Password is strong',
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './password-strength-check.component.html',
  styleUrls: ['./password-strength-check.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule],
})
export class PasswordStrengthCheck {
  hide:boolean = true;
  password: string = '';
  passwordStrength: string[] = ['', '', ''];
  passwordAnnotation: string = '';

  checkPassword() {
    const lengthCondition = this.password.length >= 8;
    const easyCondition = /^[a-zA-Z0-9!@#\$%\^&\*а-яА-Я]+$/.test(this.password);
    const mediumCondition = /^(?=.*[a-zA-Z])(?=.*[0-9])|(?=.*[a-zA-Z])(?=.*[!@#\$%\^&\*])|(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(this.password);
    const strongCondition = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(this.password);

    if (!this.password) {
      this.passwordStrength = ['', '', ''];
      this.passwordAnnotation = PasswordAnnotation.empty;
      return
    }

    if (!lengthCondition) {
      this.passwordStrength = ['red', 'red', 'red'];
      this.passwordAnnotation = PasswordAnnotation.lessCharacters;
      return
    }

    if (easyCondition) {
      this.passwordStrength = ['red', '', ''];
      this.passwordAnnotation = PasswordAnnotation.easy;
    }

    if (mediumCondition) {
      this.passwordStrength = ['yellow', 'yellow', ''];
      this.passwordAnnotation = PasswordAnnotation.medium;
    }

    if (strongCondition) {
      this.passwordStrength = ['green', 'green', 'green'];
      this.passwordAnnotation = PasswordAnnotation.strong;
    }
  }
}


