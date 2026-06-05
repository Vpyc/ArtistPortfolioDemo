import {PortfolioCategorySlugEnum} from "../enums/portfolio-category-slug.enum";

export interface PortfolioPreview {
  slug: PortfolioCategorySlugEnum;

  title: string;

  description?: string;

  imageUrl: string;
}
