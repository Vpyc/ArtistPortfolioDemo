import {ChangeDetectionStrategy, Component, computed, effect, HostListener, Signal, signal} from '@angular/core';
import { RouterLink } from '@angular/router';
import {PORTFOLIO_CATEGORIES} from "../../../shared/constants/portfolio-categories";
import {PortfolioCategory} from "../../../shared/interfaces/portfolio-category.interface";
import {CONTENT} from "../../../content";
import {NavigationItem} from "../../../shared/interfaces/navigation.interface";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  protected categories: PortfolioCategory[] = PORTFOLIO_CATEGORIES;

  readonly isMenuOpen = signal(false);

  readonly isScrolled = signal(false);

  protected readonly navigation: Signal<NavigationItem[]> = computed(() => {
    return CONTENT.shared.NAVIGATION_CONTENT.items.map(item => {
      if (item.useCategories) {
        return {
          label: item.label,
          children: this.categories.map(category => ({
            label: category.title,
            link: `/portfolio/${category.slug}`,
          })),
        };
      }

      return item;
    });
  });

  private lastScrollY = 0;

  constructor() {
    effect(() => {
      const open = this.isMenuOpen();

      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const currentScroll = window.scrollY;

    if (Math.abs(currentScroll - this.lastScrollY) < 10) {
      return;
    }

    if (currentScroll <= 10) {
      this.isScrolled.set(false);
    } else if (currentScroll > this.lastScrollY) {
      this.isScrolled.set(true);
    } else {
      this.isScrolled.set(false);
    }

    this.lastScrollY = currentScroll;
  }
}
