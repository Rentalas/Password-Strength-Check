import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GREEN_COLOR, PasswordAnnotation, RED_COLOR, YELLOW_COLOR } from '../password-strength-constants';

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
      this.passwordStrengthColor = [RED_COLOR, RED_COLOR, RED_COLOR];
      return;
    }

    if (this.passwordAnnotation === PasswordAnnotation.strong) {
      this.passwordStrengthColor = [GREEN_COLOR, GREEN_COLOR, GREEN_COLOR];
      return;
    }

    if (this.passwordAnnotation === PasswordAnnotation.medium) {
      this.passwordStrengthColor = [YELLOW_COLOR, YELLOW_COLOR, ''];
      return;
    }

    if (this.passwordAnnotation === PasswordAnnotation.easy) {
      this.passwordStrengthColor = [RED_COLOR, '', ''];
      return;
    }
  }
}
