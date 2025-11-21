import { it } from "./it";
import { en } from "./en";

export const translations = {
  it,
  en,
};

export type TranslationKey = keyof typeof it;

