import {
  AtLeastEightCharactersLong,
  AtLeastOneDigit,
  AtLeastOneLowercaseLetter,
  AtLeastOneUppercaseLetter,
  InvalidaEmail,
} from "@/utils/constants/ErrorMessages";

export const validateLogin = (email: string, password: string): string => {
  if (!isEmailValid(email)) 
    return InvalidaEmail;

  return isPasswordValid(password);
};

const isEmailValid = (email: string): boolean => {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isPasswordValid = (password: string): string => {
  const regexChecks = [
    { regex: /(?=.*[a-z])/, error: AtLeastOneLowercaseLetter },
    { regex: /(?=.*[A-Z])/, error: AtLeastOneUppercaseLetter },
    { regex: /(?=.*\d)/, error: AtLeastOneDigit },
    { regex: /.{8,}/, error: AtLeastEightCharactersLong },
  ];

  for (const check of regexChecks) {
    if (!check.regex.test(password))
      return check.error;
  }

  return "";
};
