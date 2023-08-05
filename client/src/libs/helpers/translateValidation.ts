import { t } from '$i18n/translations';
import { AuthError, JwtError, UserError } from '../message/responseMessage.enum';

export const translateValidation = (message: string) => {
    switch (message) {
        case AuthError.USER_NOT_ACTIVATED:
            return t.get('validation.USER_NOT_ACTIVATED');
        case AuthError.USER_INVALID_CREDENTIALS:
            return t.get('validation.USER_INVALID_CREDENTIALS');
        case AuthError.USER_ALREADY_ACTIVATED:
            return t.get('validation.USER_ALREADY_ACTIVATED');
        case AuthError.USER_EMAIL_NOT_FOUND:
            return t.get('validation.USER_EMAIL_NOT_FOUND');
        case AuthError.USER_PASSWORDS_NOT_MATCH:
            return t.get('validation.USER_PASSWORDS_NOT_MATCH');
        case AuthError.USER_NOT_FOUND:
            return t.get('validation.USER_NOT_FOUND');
        case AuthError.USER_OAUTH_CHANGE_PASSWORD:
            return t.get('validation.USER_OAUTH_CHANGE_PASSWORD');
        case AuthError.USER_OAUTH_LOGIN:
            return t.get('validation.USER_OAUTH_LOGIN');
        case AuthError.USER_OLD_PASSWORD_INVALID:
            return t.get('validation.USER_OLD_PASSWORD_INVALID');
        case AuthError.USER_BLOCKED:
            return t.get('validation.USER_BLOCKED');
        case AuthError.USER_ALREADY_ACTIVATED_LOGIN:
            return t.get('validation.USER_ALREADY_ACTIVATED_LOGIN');
        case AuthError.USER_LOGIN_INACTIVE_ACCOUNT:
            return t.get('validation.USER_LOGIN_INACTIVE_ACCOUNT');
        case JwtError.INVALID_TOKEN:
            return t.get('validation.INVALID_TOKEN');
        case JwtError.EXPIRED_TOKEN:
            return t.get('validation.EXPIRED_TOKEN');
        case JwtError.ACCESS_TOKEN_EXPIRED:
            return t.get('validation.ACCESS_TOKEN_EXPIRED');
        case UserError.DISPLAY_NAME_CANNOT_BE_EMPTY:
            return t.get('validation.MISSING_DISPLAY_NAME');
        case UserError.FILE_TOO_LARGE:
            return t.get('validation.AVATAR_MUST_BE_LESS_THAN_5MB');
        case UserError.UNKNOWN_FILE_FORMAT:
            return t.get('validation.UNKNOWN_FILE_FORMAT');
        default:
            return message;
    }
};
