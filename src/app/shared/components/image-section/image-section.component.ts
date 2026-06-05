import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {ImageSection} from "../../interfaces/section.interface";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-image-section',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './image-section.component.html',
  styleUrl: './image-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSectionComponent {
  public section: InputSignal<ImageSection> = input.required<ImageSection>();
}
