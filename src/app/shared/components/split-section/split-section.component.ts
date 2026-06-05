import {ChangeDetectionStrategy, Component, computed, input, InputSignal, Signal} from '@angular/core';
import {SplitSection} from "../../interfaces/section.interface";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-split-section',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './split-section.component.html',
  styleUrl: './split-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplitSectionComponent {
  public section: InputSignal<SplitSection> = input.required<SplitSection>();

  protected readonly splitLine: Signal<boolean> = computed(() => {
    return this.section().layout?.splitLine ?? false
  })
}
