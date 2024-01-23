import { Injectable } from '@angular/core';
import { MINPASSWORDLENGTH, MEDIUMCONDITIONPASSWORDSTRENGTH, PasswordAnnotation, STRONGCONDITIONPASSWORDSTRENGTH } from './password-strength-constants';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthCheckService {

  constructor() { }

  checkPassword(password: string): PasswordAnnotation {
    const lengthCondition = password.length >= MINPASSWORDLENGTH;
    const mediumCondition = MEDIUMCONDITIONPASSWORDSTRENGTH.test(password);
    const strongCondition = STRONGCONDITIONPASSWORDSTRENGTH.test(password);
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
