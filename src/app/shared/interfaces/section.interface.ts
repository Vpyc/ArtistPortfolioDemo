import {SectionTypeEnum} from "../enums/section-type.enum";
import {GalleryImage} from "./gallery-image.interface";
import {BaseSection} from "./base-section.interface";

export interface ImageSection extends BaseSection {
  type: SectionTypeEnum.Image;
  title?: string;
  description?: string;
  image: string;
}

export interface GallerySection extends BaseSection {
  type: SectionTypeEnum.Gallery;
  images: GalleryImage[];
  layout?: {
    gap?: number;
  };
}

export interface SplitSection extends BaseSection {
  type: SectionTypeEnum.Split;
  image: string;
  title: string;
  description?: string;

  layout?: {
    imageWidthMax?: number;
    direction?: string;
    splitLine?: boolean;
  }
}

export interface TextSection extends BaseSection {
  type: SectionTypeEnum.Text;
  text: string;
}

export interface TimelineSection extends BaseSection {
  type: SectionTypeEnum.Timeline;
  date: Date;
  title: string;
  description: string;
  image: string;
}
