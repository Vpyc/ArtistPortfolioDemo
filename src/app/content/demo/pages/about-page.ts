import {Page} from "../../../shared/interfaces/page.interface";
import {MEDIA} from "../media/media.registry";
import {
  createSplitSection,
  createTextSection,
  createTimelineSection
} from "../../../shared/factories/section-builder.factory";

export const ABOUT_PAGE: Page = {
    groups: [
      {
        textColor: '--primary',
        sections: [
          createTextSection({
            id: 'about-text',
            text: 'Обо мне',
          }),
          createSplitSection({
            id: 'about-split',
            title: 'Тестовый художник',
            image: MEDIA.about.portrait,
            description: 'Победа наконец то может быть пожалуйста????'
          }),
        ]
      },
      {
        textColor: '--foreground',
        sections: [
          createTextSection({
            id: 'about-text-timeline',
            text: 'Достижения',
          }),
          createTimelineSection({
            id: 'about-timeline-1',
            title: 'Победа пожалуйста',
            description: 'Возможная победа побед в победе',
            image: MEDIA.paintings.main,
          }),
          createTimelineSection({
            id: 'about-timeline-2',
            title: 'Победа пожалуйста 2',
            description: 'Возможная победа побед в победе 2',
            image: MEDIA.interiorPainting.gallery1,
          }),
        ]
      }
    ]
  }
;
