import {ChangeDetectionStrategy, Component, computed, inject, Signal} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {RevealDirective} from "../../../../shared/directives/reveal.directive";
import {PortfolioPreview} from "../../../../shared/interfaces/portfolio-preview.interface";
import {PageService} from "../../../../shared/services/page.service";

@Component({
  selector: 'app-home-preview-section',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    RevealDirective
  ],
  templateUrl: './home-preview-section.component.html',
  styleUrl: './home-preview-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePreviewSectionComponent {
  private readonly pageService: PageService = inject(PageService);

  protected readonly previews: Signal<PortfolioPreview[]> = computed(() =>
    this.pageService.getPortfolioPreviews()
  );
}
