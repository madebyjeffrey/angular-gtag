import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2
} from '@angular/core';

import { Gtag } from './gtag.service';

@Directive({
  selector: '[gtagEvent]'
})
export class GtagEventDirective implements AfterViewInit {
  @Input() trackOn: string | null = null;
  @Input() action: string | null = null;
  @Input() category: string | null = null;
  @Input() params: any = null;

  constructor(
    private gtag: Gtag,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngAfterViewInit() {
    try {
      if (this.trackOn == null || this.action == null || this.category == null || this.params == null) {
        throw "Properties are not sufficiently filled in.";
      }

      this.renderer.listen(this.el.nativeElement, this.trackOn, () => {
        this.gtag.event(this.action! || this.trackOn!, {
          event_category: this.category,
          ...this.params
        });
      });

    } catch (err) {
      console.error(err);
    }
  }
}
