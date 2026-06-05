import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-link-button-section',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './link-button-section.component.html',
  styleUrl: './link-button-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkButtonSectionComponent {

}
