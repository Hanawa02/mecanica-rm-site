import type { PageSlug } from "~/interfaces/page-slugs.interface";
import sitePage from "~/composables/queries/site-page.query";

function sitePageSlugs(): string {
  return `
  query StaticRoutes {
    sitePages {
      slug
      locale
      localizations {
        locale
        slug
      }
    }
  }`;
}

export function useGraphqlQueries() {
  return {
    sitePage,
    sitePageSlugs: {
      query: sitePageSlugs,
      transfromResponse: (response: any): PageSlug[] => {
        return response?.data?.sitePages || [];
      },
    },
  };
}
