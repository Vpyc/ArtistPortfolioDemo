import {Page} from "../../../shared/interfaces/page.interface";
import {MEDIA} from "../media/media.registry";
import {createSplitSection} from "../../../shared/factories/section-builder.factory";

export const PANELS_PAGE: Page = {
  hero: {
    title: 'Абстрактное панно',
    backgroundImage: MEDIA.panels.main
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
