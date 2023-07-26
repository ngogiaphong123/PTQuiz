export enum ResponseMessage {
	MISSING_DISPLAY_NAME = "Display name can't be empty",
	MISSING_EMAIL = "Email can't be empty",
	MISSING_PASSWORD = "Password can't be empty",
	MISSING_CONFIRM_PASSWORD = "Confirm password can't be empty",
	INVALID_EMAIL = 'Invalid email.',
	PASSWORD_MUST_BE_AT_LEAST_8_CHARACTERS = 'Password must be at least 8 characters',
	DISPLAY_NAME_MUST_BE_AT_LEAST_3_CHARACTERS = 'Display name must be at least 3 characters',
	CONFIRM_PASSWORD_MUST_MATCH_PASSWORD = 'Confirm password must match password',
	EMAIL_ALREADY_EXISTS = 'Email already exists',
	PASSWORD_TOO_LONG = 'Password too long',
	CONFIRM_PASSWORD_TOO_LONG = 'Confirm password too long',
	DISPLAY_NAME_TOO_LONG = 'Display name too long',
	EMAIL_TOO_LONG = 'Email too long',
	EMAIL_NOT_CONFIRMED = 'Your account is not active, please confirm your email',
	AVATAR_MUST_BE_LESS_THAN_5MB = 'Avatar must be less than 4MB',
	OLD_PASSWORD_IS_REQUIRED = 'Old password is required',
	NEW_PASSWORD_IS_REQUIRED = 'New password is required',
	NEW_PASSWORD_TOO_LONG = 'New password is too long',
	OLD_PASSWORD_TOO_LONG = 'Old password is too long'
}

export enum AuthError {
	USER_NOT_ACTIVATED = 'Your account is not active, please confirm your email',
	USER_INVALID_CREDENTIALS = 'Invalid credentials',
	USER_ALREADY_ACTIVATED = 'Email already confirmed',
	USER_EMAIL_NOT_FOUND = 'User with this email does not exist',
	USER_PASSWORDS_NOT_MATCH = 'Password do not match confirm password',
	USER_NOT_FOUND = 'User not found',
	USER_OAUTH_CHANGE_PASSWORD = 'You are using OAuth, please change password in your OAuth account',
	USER_OAUTH_LOGIN = 'You are using OAuth, please login with your OAuth account',
	USER_OLD_PASSWORD_INVALID = 'Old password is not valid',
	USER_BLOCKED = 'Your account is blocked, please reset your password or contact for support',
	USER_ALREADY_ACTIVATED_LOGIN = 'User with this email already exists, please login',
	USER_LOGIN_INACTIVE_ACCOUNT = 'Your account is not active, please confirm your email'
}

export enum JwtError {
	INVALID_TOKEN = 'Invalid token',
	EXPIRED_TOKEN = 'Token expired',
	ACCESS_TOKEN_EXPIRED = 'Access token expired',
	TOKEN_EXPIRED_ERROR = 'TokenExpiredError'
}
