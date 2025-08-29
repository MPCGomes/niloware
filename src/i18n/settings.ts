export const languages = ["en", "es", "pt-BR"] as const;
export type Locale = (typeof languages)[number];
