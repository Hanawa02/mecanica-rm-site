import type { PageSection } from "~/interfaces/page-section.interface";
import type { SeoMetadata } from "~/interfaces/seo-metadata.interface";

export interface PageSite {
  pageTitle: string;
  slug: string;
  createdAt: Date;
  updateAt: Date;
  seoMetadata: SeoMetadata;
  content: PageSection[];
}
