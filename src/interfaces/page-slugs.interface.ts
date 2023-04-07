export interface LocalizationSlug {
  slug: string;
  locale: string;
}

export interface PageSlug {
  slug: string;
  locale: string;
  localizations: LocalizationSlug[];
}
