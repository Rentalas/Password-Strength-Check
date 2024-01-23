export enum PasswordAnnotation {
    empty = '',
    lessCharacters = 'Password must contain more than 8 characters',
    easy = 'Password is easy',
    medium = 'Password is medium',
    strong = 'Password is strong',
}

export const MEDIUMCONDITIONPASSWORDSTRENGTH = /^(?=.*[a-zA-Z])(?=.*[0-9])|(?=.*[a-zA-Z])(?=.*[!@#\$%\^&\\(\\)\*])|(?=.*[0-9])(?=.*[!@#\$%\^&\\(\\)\*])/;
export const STRONGCONDITIONPASSWORDSTRENGTH = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\\(\\)\*])/;
export const MINPASSWORDLENGTH = 8;