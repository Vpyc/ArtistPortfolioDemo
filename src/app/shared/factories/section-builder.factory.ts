import {
  GallerySection,
  ImageSection,
  SplitSection,
  TextSection,
  TimelineSection
} from "../interfaces/section.interface";
import {SectionTypeEnum} from "../enums/section-type.enum";
import {
  CreateGallerySectionData, CreateImageSectionData,
  CreateSplitSectionData,
  CreateTextSectionData, CreateTimelineSectionData
} from "../models/create-section-data.type";

export function createSplitSection(
  data: CreateSplitSectionData
): SplitSection {
  return {
    id: crypto.randomUUID(),

    type: SectionTypeEnum.Split,

    ...data,

    layout: {
      splitLine: true,
      imageWidthMax: 600,

      ...data.layout,
    },
  };
}

export function createGallerySection(
  data: CreateGallerySectionData
): GallerySection {
  return {
    id: crypto.randomUUID(),
    type: SectionTypeEnum.Gallery,

    ...data,

    layout: {
      gap: 36,

      ...data.layout,
    },
  };
}

export function createTextSection(
  data: CreateTextSectionData
): TextSection {
  return {
    id: crypto.randomUUID(),
    type: SectionTypeEnum.Text,

    ...data,
  };
}

export function createTimelineSection(
  data: CreateTimelineSectionData
): TimelineSection {
  return {
    id: crypto.randomUUID(),
    type: SectionTypeEnum.Timeline,
    date: new Date(),

    ...data,
  };
}

export function createImageSection(
  data: CreateImageSectionData
): ImageSection {
  return {
    id: crypto.randomUUID(),
    type: SectionTypeEnum.Image,

    ...data,
  };
}
