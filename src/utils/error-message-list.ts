/** output: Invalid email address */
const emailError = () => 'Invalid email address';

/** output: ${label} can only contain digits (0-9), hyphen (-), space (' '), dot (.), hash (#), star (*), and plus (+) only */
const phoneError = (label: string) =>
  `${label} can only contain digits (0-9), hyphen (-), space (' '), dot (.), hash (#), star (*), and plus (+)`;

/** output: ${label} can only contain letters and a single space between words */
const nameError = (label: string) => `${label} can only contain letters and a single space between words`;

/** output: ${label} can only contain digits */
const numericError = (label: string) => `${label} can only contain digits`;

/** output: ${label} can only contain letters, numbers, and a single space between words */
const alphaNumericError = (label: string) =>
  `${label} can only contain letters, numbers, and a single space between words`;

/** output: ${label} can only contain letters, numbers, and underscore */
const variableError = (label: string) => `${label} can only contain letters, numbers, and underscore`;

/** Checks whether field contains no-whitespaces or not */
const noWhiteSpaceError = (label: string) => `${label} does not allow whitespace`;

/** output: ${label} can only contain minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character */
const pwdError = (label: string) =>
  `${label} can only contain minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character`;

const reqError = (label: string) => `${label} is required`;

const minLenError = (label: string, length: number) => `${label} must be at least ${length} characters long`;

const maxLenError = (label: string, length: number) => `${label} must not exceed ${length} characters`;

const minError = (label: string, min: number) => `${label}' value must be greater than or equal to ${min}`;

const maxError = (label: string, max: number) => `${label}' value must be less than or equal to ${max}`;

export {
  emailError,
  phoneError,
  nameError,
  numericError,
  alphaNumericError,
  variableError,
  noWhiteSpaceError,
  pwdError,
  reqError,
  minLenError,
  maxLenError,
  minError,
  maxError,
};
