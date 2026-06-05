import {Page} from "../../../shared/interfaces/page.interface";
import {MEDIA} from "../media/media.registry";
import {createSplitSection} from "../../../shared/factories/section-builder.factory";

export const INTERIOR_ART_PAGE: Page = {
  hero: {
    title: 'Интерьерная картина',
    backgroundImage: MEDIA.paintings.main
  },
  groups: [
    {
      backgroundColor: '--card',
      textColor: '--background',
      sections: [
        createSplitSection({
          id: 'panno-split',
          title: 'Аквапарк "Мореон"',
          image: MEDIA.interiorPainting.gallery1,
          description: 'Победа наконец то может быть пожалуйста????'
        }),
      ]
    }
  ]
}
