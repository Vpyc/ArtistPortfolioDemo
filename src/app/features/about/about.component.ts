import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {PageRendererComponent} from "../../shared/components/page-renderer/page-renderer.component";
import {PageService} from "../../shared/services/page.service";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    PageRendererComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  private readonly pageService = inject(PageService);

  protected aboutPage = this.pageService.getAboutPage();
}
