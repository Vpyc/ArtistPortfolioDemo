import {Injectable} from "@angular/core";
import {PortfolioCategorySlugEnum} from "../enums/portfolio-category-slug.enum";
import {Page} from "../interfaces/page.interface";
import {CONTENT} from "../../content";
import {PortfolioPreview} from "../interfaces/portfolio-preview.interface";

@Injectable({ providedIn: 'root' })
export class PageService {
  public getPortfolioPage(slug: PortfolioCategorySlugEnum): Page {
    return CONTENT.pages[slug];
  }

  public getAboutPage(): Page {
    return CONTENT.aboutPage;
  }

  public getPortfolioPreviews(): PortfolioPreview[] {
    return Object.values(PortfolioCategorySlugEnum).map(slug => {
      const page = this.getPortfolioPage(slug);

      return {
        slug,
        title: page.hero?.title ?? '',
        imageUrl: page.hero?.backgroundImage ?? '',
        description: CONTENT.shared.PREVIEW_DESCRIPTION_MAP[slug],
      };
    });
  }
}
