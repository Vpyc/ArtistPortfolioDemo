import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {HeroSizeEnum} from "../../enums/hero-size.enum";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSectionComponent {
  public imageUrl: InputSignal<string> = input.required<string>();
  public size: InputSignal<HeroSizeEnum> = input<HeroSizeEnum>(
    HeroSizeEnum.Full
  );

}
