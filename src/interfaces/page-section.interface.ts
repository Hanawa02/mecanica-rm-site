export interface PageSection {
  id: string;
  content: {
    id: string;
    tailwindClasses: string;
    content: {
      html: string;
    };
  }[];
  sectionTailwindClasses: string;
  backgroundColor?: {
    hex?: string;
  };
  textColor?: {
    hex?: string;
  };
}
