export const required = (value) => (value || typeof value === 'number' ? undefined : "Ну введите хоть что-нибудь, а");
export const minLength = min => (value) => (value && value.length < min ? `Нужно ввести больше ${min} символов` : undefined);
export const maxLength = max => (value) => (value && value.length > max ? `Нужно ввести меньше ${max} символов` : undefined);
export const composeValidators = (...validators) => (value) =>
	validators.reduce((error, validator) => error || validator(value), undefined);