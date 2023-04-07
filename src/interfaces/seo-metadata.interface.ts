export interface SeoMetadata {
  description: string;
  robotsNoFollow?: boolean;
  robotsNoIndex?: boolean;
  structuredData?: Object;
  title: string;
  theme?: {
    hex: string;
  };
  image: {
    url: string;
    altText: string;
  };
  links: {
    rel: string;
    type: string;
    additionalAttributues: Object;
    href: string;
  };
}
