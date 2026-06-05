import {PortfolioCategorySlugEnum} from "../../../shared/enums/portfolio-category-slug.enum";
import {INTERIOR_PAINTING_PAGE} from "./interior-painting-page";
import {INTERIOR_ART_PAGE} from "./interior-art-page";
import {PANELS_PAGE} from "./panels-page";
import {PAINTING_PAGE} from "./painting-page";

export * from './about-page';

export const PAGE_MAPPING = {
  [PortfolioCategorySlugEnum.InteriorPainting]:
  INTERIOR_PAINTING_PAGE,

  [PortfolioCategorySlugEnum.InteriorArt]:
  INTERIOR_ART_PAGE,

  [PortfolioCategorySlugEnum.Panels]:
  PANELS_PAGE,

  [PortfolioCategorySlugEnum.Painting]:
  PAINTING_PAGE,
};
