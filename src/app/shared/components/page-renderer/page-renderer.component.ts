import {ChangeDetectionStrategy, Component, input, InputSignal, Type} from '@angular/core';
import {SectionTypeEnum} from "../../enums/section-type.enum";
import {ImageSectionComponent} from "../image-section/image-section.component";
import {GallerySectionComponent} from "../gallery-section/gallery-section.component";
import {TextSectionComponent} from "../text-section/text-section.component";
import {SplitSectionComponent} from "../split-section/split-section.component";
import {NgComponentOutlet, NgStyle} from "@angular/common";
import {Page} from "../../interfaces/page.interface";
import {TimelineSectionComponent} from "../timeline-section/timeline-section.component";
import {RevealDirective} from "../../directives/reveal.directive";
import {BaseSection} from "../../interfaces/base-section.interface";
import {Section} from "../../models/sections.type";

@Component({
  selector: 'app-page-renderer',
  standalone: true,
  imports: [
    NgComponentOutlet,
    NgStyle,
    RevealDirective
  ],
  templateUrl: './page-renderer.component.html',
  styleUrl: './page-renderer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageRendererComponent {
  public page: InputSignal<Page> = input.required<Page>();

  private sectionComponents: Record<SectionTypeEnum, Type<unknown>> = {
    [SectionTypeEnum.Image]: ImageSectionComponent,
    [SectionTypeEnum.Gallery]: GallerySectionComponent,
    [SectionTypeEnum.Text]: TextSectionComponent,
    [SectionTypeEnum.Split]: SplitSectionComponent,
    [SectionTypeEnum.Timeline]: TimelineSectionComponent,
  };

  protected getComponent(section: Section) {
    return this.sectionComponents[section.type];
  }

}
