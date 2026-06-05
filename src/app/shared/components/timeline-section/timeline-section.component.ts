import {Component, input, InputSignal} from '@angular/core';
import {TimelineSection} from "../../interfaces/section.interface";
import {DatePipe, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-timeline-section',
  standalone: true,
  imports: [
    DatePipe,
    NgOptimizedImage
  ],
  templateUrl: './timeline-section.component.html',
  styleUrl: './timeline-section.component.scss'
})
export class TimelineSectionComponent {
  public section: InputSignal<TimelineSection> = input.required<TimelineSection>();
}
