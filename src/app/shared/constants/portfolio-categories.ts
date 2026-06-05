import {PortfolioCategory} from "../interfaces/portfolio-category.interface";
import {PortfolioCategorySlugEnum} from "../enums/portfolio-category-slug.enum";

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  { slug: PortfolioCategorySlugEnum.InteriorPainting, title: 'Роспись интерьера' },
  { slug: PortfolioCategorySlugEnum.InteriorArt, title: 'Интерьерная картина' },
  { slug: PortfolioCategorySlugEnum.Panels, title: 'Абстрактное панно' },
  { slug: PortfolioCategorySlugEnum.Painting, title: 'Живопись' },
];
