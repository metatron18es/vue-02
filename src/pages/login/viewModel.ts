import { createDefaultValidationResult, ValidationResult } from "@lemoncode/fonk";

export interface Login {
  name: string;
  password: string;
}

export const createEmptyLogin = (): Login => ({
  name: "",
  password: "",
});

export interface LoginError {
  name: ValidationResult;
  password: ValidationResult;
}

export type ResultLoginError = Record<keyof LoginError, boolean | string>;

export const creteEmptyLoginError = () => ({
  name: createDefaultValidationResult(),
  password: createDefaultValidationResult,
});