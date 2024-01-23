import { Injectable } from '@angular/core';
import { PasswordAnnotation, MEDIUM_CONDITION_PASSWORD_STRENGTH, STRONG_CONDITION_PASSWORD_STRENGTH, MIN_PASSWORD_LENGTH } from './password-strength-constants';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthCheckService {

  constructor() { }

  checkPassword(password: string): PasswordAnnotation {
    const lengthCondition = password.length >= MIN_PASSWORD_LENGTH;
    const mediumCondition = MEDIUM_CONDITION_PASSWORD_STRENGTH.test(password);
    const strongCondition = STRONG_CONDITION_PASSWORD_STRENGTH.test(password);
    let passwordAnnotation = PasswordAnnotation.easy;

    if (!password) {
      passwordAnnotation = PasswordAnnotation.empty;
      return passwordAnnotation;
    }

    if (!lengthCondition) {
      passwordAnnotation = PasswordAnnotation.lessCharacters;
      return passwordAnnotation;
    }

    if (strongCondition) {
      passwordAnnotation = PasswordAnnotation.strong;
      return passwordAnnotation;
    }

    if (mediumCondition) {
      passwordAnnotation = PasswordAnnotation.medium;
      return passwordAnnotation;
    }

    return passwordAnnotation
  }
}
