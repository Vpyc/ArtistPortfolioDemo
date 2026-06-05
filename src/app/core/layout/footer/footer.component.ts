import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CONTENT} from "../../../content";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  protected readonly content = CONTENT.shared.FOOTER_CONTENT;

  protected year: number = new Date().getFullYear();
}
