import {getMediaUrl} from "../../../shared/utils/media.utils";

export const MEDIA = {

  hero: {
    main: getMediaUrl('main.jpg'),
  },

  paintings: {
    main: getMediaUrl('paint.jpg'),
    livePaint: getMediaUrl('live-paint.jpg')
  },

  panels: {
    main: getMediaUrl('panno.jpg')
  },

  interiorPainting: {
    hero: getMediaUrl('interier.jpg'),
    gallery1: getMediaUrl('interier.jpg'),
  },

  about: {
    portrait: getMediaUrl('about.jpg'),
  },

};
