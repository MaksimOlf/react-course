export const required = (value) => (value || typeof value === 'number' ? undefined : "Ну введите хоть что-нибудь");
export const minLength = min => (value) => (value && value.length < min ? `Сообщение должно быть не короче ${min} символов` : undefined);
export const maxLength = max => (value) => (value && value.length > max ? `Сообщение должно быть не длиннее ${max} символов` : undefined);
export const composeValidators = (...validators) => (value) =>
	validators.reduce((error, validator) => error || validator(value), undefined);