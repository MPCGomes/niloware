export const languages = ["pt-br", "en-us", "es-es"] as const;
export type Locale = (typeof languages)[number];
