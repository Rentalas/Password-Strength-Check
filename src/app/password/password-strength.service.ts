import { Injectable } from '@angular/core';
import { PasswordAnnotation, MEDIUM_CONDITION_PASSWORD_STRENGTH, STRONG_CONDITION_PASSWORD_STRENGTH, MIN_PASSWORD_LENGTH } from './password-strength-constants';

@Injectable()
export class PasswordStrengthService {
  checkPassword(password: string): PasswordAnnotation {
    const lengthCondition = password.length >= MIN_PASSWORD_LENGTH;
    const mediumCondition = MEDIUM_CONDITION_PASSWORD_STRENGTH.test(password);
    const strongCondition = STRONG_CONDITION_PASSWORD_STRENGTH.test(password);

    if (!password) {
      return PasswordAnnotation.empty;
    }

    if (!lengthCondition) {
      return PasswordAnnotation.lessCharacters;
    }

    if (strongCondition) {
      return PasswordAnnotation.strong;
    }

    if (mediumCondition) {
      return PasswordAnnotation.medium;
    }

    return PasswordAnnotation.easy;
  }
}
