import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {toSignal} from "@angular/core/rxjs-interop";
import {map} from "rxjs";
import {PortfolioCategorySlugEnum} from "../../shared/enums/portfolio-category-slug.enum";
import {HeroSectionComponent} from "../../shared/components/hero-section/hero-section.component";
import {HeroSizeEnum} from "../../shared/enums/hero-size.enum";
import {LinkButtonSectionComponent} from "../../shared/components/link-button-section/link-button-section.component";
import {PageRendererComponent} from "../../shared/components/page-renderer/page-renderer.component";
import {PageService} from "../../shared/services/page.service";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    HeroSectionComponent,
    LinkButtonSectionComponent,
    PageRendererComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {
  private route = inject(ActivatedRoute);
  private readonly pageService = inject(PageService);

  private category = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('category')),
      map(cat => Object.values(PortfolioCategorySlugEnum).includes(cat as PortfolioCategorySlugEnum)
        ? cat as PortfolioCategorySlugEnum
        : PortfolioCategorySlugEnum.InteriorPainting
      )
    ),
    { initialValue: PortfolioCategorySlugEnum.InteriorPainting }
  );

  protected readonly categoryPage = computed(() =>
    this.pageService.getPortfolioPage(this.category())
  );
  protected readonly HeroSizeEnum = HeroSizeEnum;
}
