import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PasswordAnnotation } from '../password-strength-constants';

@Component({
  selector: 'password-strength-indicator',
  templateUrl: './password-strength-indicator.component.html',
  styleUrls: ['./password-strength-indicator.component.scss']
})
export class PasswordStrengthIndicatorComponent implements OnChanges {

  @Input() passwordAnnotation: PasswordAnnotation;
  passwordStrengthColor: string[] = ['', '', ''];

  ngOnChanges(changes: SimpleChanges): void {
    this.changeIndicatorsColor();
  }

  changeIndicatorsColor(): void {
    if (this.passwordAnnotation === PasswordAnnotation.empty) {
      this.passwordStrengthColor = ['', '', ''];
      return;
    }

    if (this.passwordAnnotation === PasswordAnnotation.lessCharacters) {
      this.passwordStrengthColor = ['#FF0000', '#FF0000', '#FF0000'];
      return;
    }

    if (this.passwordAnnotation === PasswordAnnotation.strong) {
      this.passwordStrengthColor = ['#008000', '#008000', '#008000'];
      return;
    }

    if (this.passwordAnnotation === PasswordAnnotation.medium) {
      this.passwordStrengthColor = ['#FFFF00', '#FFFF00', ''];
      return;
    }

    if (this.passwordAnnotation === PasswordAnnotation.easy) {
      this.passwordStrengthColor = ['#FF0000', '', ''];
      return;
    }
  }
}
