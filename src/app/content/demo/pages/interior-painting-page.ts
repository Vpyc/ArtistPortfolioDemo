import {Page} from "../../../shared/interfaces/page.interface";
import {MEDIA} from "../media/media.registry";
import {createGallerySection, createSplitSection} from "../../../shared/factories/section-builder.factory";

export const INTERIOR_PAINTING_PAGE: Page = {
  hero: {
    title: 'Интерьерная роспись',
    backgroundImage: MEDIA.interiorPainting.hero
  },
  groups: [
    {
      backgroundColor: '--background',
      textColor: '--primary',
      sections: [
        createSplitSection({
          id: 'panno-split',
          title: 'Аквапарк "Мореон"',
          image: MEDIA.interiorPainting.gallery1,
          description: 'Победа наконец то может быть пожалуйста????'
        }),
        createGallerySection({
          id: 'interior-painting-moreon',
          images: [
            {
              src: MEDIA.interiorPainting.gallery1,
            },
            {
              src: MEDIA.paintings.livePaint,
              featured: true
            },
            {
              src: MEDIA.panels.main,
            },
            {
              src: MEDIA.paintings.main,
              featured: true
            },
            {
              src: MEDIA.interiorPainting.gallery1,
            },
            {
              src: MEDIA.paintings.livePaint,
            },
            {
              src: MEDIA.panels.main,
            },
            {
              src: MEDIA.paintings.main,
            },
          ],
        })
      ]
    },
    {
      backgroundColor: '--primary-foreground',
      textColor: '--primary',
      sections: [
        createSplitSection({
          id: 'panno-split',
          title: 'Аквапарк "Мореон"',
          image: MEDIA.interiorPainting.gallery1,
          description: 'Победа наконец то может быть пожалуйста????'
        }),
        createGallerySection({
          id: 'interior-painting-moreon',
          images: [
            {
              src: MEDIA.interiorPainting.gallery1,
            },
            {
              src: MEDIA.paintings.livePaint,
              featured: true
            },
            {
              src: MEDIA.panels.main,
            },
            {
              src: MEDIA.paintings.main,
              featured: true
            },
            {
              src: MEDIA.interiorPainting.gallery1,
            },
            {
              src: MEDIA.paintings.livePaint,
            },
            {
              src: MEDIA.panels.main,
            },
            {
              src: MEDIA.paintings.main,
            },
          ],
        })
      ]
    },
  ]
}
