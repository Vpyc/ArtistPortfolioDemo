import {PortfolioCategorySlugEnum} from "../../../shared/enums/portfolio-category-slug.enum";
import {MEDIA} from "../media/media.registry";

export const HOME_CONTENT = {
  hero: {
    imageUrl: MEDIA.hero.main,

    title: ['ДЕМО', 'ХУДОЖНИК'],
    subtitle: 'Художник',
    ctaPrimary: 'Портфолио',
    ctaSecondary: 'Заказать',
  },
};

export const PREVIEW_DESCRIPTION_MAP = {
  [PortfolioCategorySlugEnum.InteriorPainting]:
  'Это вот у нас роспись интерьера',

  [PortfolioCategorySlugEnum.InteriorArt]:
  'A это Интерьерная картина',

  [PortfolioCategorySlugEnum.Panels]:
  'А зесь у нас абстракнтное панно',

  [PortfolioCategorySlugEnum.Painting]:
  'Ну и живопись конечно же',
}
