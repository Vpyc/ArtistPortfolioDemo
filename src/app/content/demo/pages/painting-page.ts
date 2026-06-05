import {Page} from "../../../shared/interfaces/page.interface";
import {MEDIA} from "../media/media.registry";
import {createSplitSection} from "../../../shared/factories/section-builder.factory";

export const PAINTING_PAGE: Page = {
  hero: {
    title: 'Живопись',
    backgroundImage: MEDIA.paintings.livePaint
  },
  groups: [
    {
      backgroundColor: '--card',
      textColor: '--background',
      sections: [
        createSplitSection({
          id: 'painting-split',
          title: 'Аквапарк "Мореон"',
          image: MEDIA.interiorPainting.gallery1,
          description: 'Победа наконец то может быть пожалуйста????'
        }),
      ]
    }
  ]
}
