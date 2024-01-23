export enum PasswordAnnotation {
    empty = '',
    lessCharacters = 'Password must contain more than 8 characters',
    easy = 'Password is easy',
    medium = 'Password is medium',
    strong = 'Password is strong',
}

export const MEDIUM_CONDITION_PASSWORD_STRENGTH = /^(?=.*[a-zA-Z])(?=.*[0-9])|(?=.*[a-zA-Z])(?=.*[!@#\$%\^&\\(\\)\*])|(?=.*[0-9])(?=.*[!@#\$%\^&\\(\\)\*])/;
export const STRONG_CONDITION_PASSWORD_STRENGTH = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\\(\\)\*])/;
export const MIN_PASSWORD_LENGTH = 8;
export const RED_COLOR = '#FF0000';
export const YELLOW_COLOR = 'FFFF00';
export const GREEN_COLOR = '#008000';