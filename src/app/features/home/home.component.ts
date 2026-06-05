import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LinkButtonSectionComponent} from "../../shared/components/link-button-section/link-button-section.component";
import {HeroSectionComponent} from "../../shared/components/hero-section/hero-section.component";
import {RouterLink} from "@angular/router";
import {CONTENT} from "../../content";
import {HomePreviewSectionComponent} from "./components/home-preview-section/home-preview-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    HomePreviewSectionComponent,
    LinkButtonSectionComponent,
    HeroSectionComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  protected readonly content = CONTENT.shared.HOME_CONTENT;

  scrollToHomePreviews() {
    const el = document.getElementById('works');
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
