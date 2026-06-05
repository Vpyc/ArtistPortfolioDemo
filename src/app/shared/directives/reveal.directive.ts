import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit {

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);

  ngAfterViewInit(): void {

    this.renderer.addClass(
      this.el.nativeElement,
      'reveal'
    );

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {

          this.renderer.addClass(
            this.el.nativeElement,
            'reveal--visible'
          );

          observer.unobserve(this.el.nativeElement);
        }
      },
      {
        threshold: 0.15
      }
    );

    observer.observe(this.el.nativeElement);
  }
}
