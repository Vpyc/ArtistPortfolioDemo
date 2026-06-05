import {
  GallerySection,
  ImageSection,
  SplitSection,
  TextSection,
  TimelineSection
} from "../interfaces/section.interface";

export type CreateSplitSectionData =
  Partial<SplitSection>
  &
  Pick<SplitSection, 'title' | 'image'>;

export type CreateGallerySectionData =
  Partial<GallerySection>
  &
  Pick<GallerySection, 'images'>;

export type CreateTextSectionData =
  Partial<TextSection>
  &
  Pick<TextSection, 'text'>;

export type CreateTimelineSectionData =
  Partial<TimelineSection>
  &
  Pick<TimelineSection, 'image' | 'description' | 'title'>;

export type CreateImageSectionData =
  Partial<ImageSection>
  &
  Pick<ImageSection, 'image'>;
