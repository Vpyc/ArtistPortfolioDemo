import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {TextSection} from "../../interfaces/section.interface";

@Component({
  selector: 'app-text-section',
  standalone: true,
  imports: [],
  templateUrl: './text-section.component.html',
  styleUrl: './text-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextSectionComponent {
  public section: InputSignal<TextSection> = input.required<TextSection>();
}
