import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appStyleChanger]'
})
export class StyleChangerDirective {
  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.changeBg('pink');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.changeBg('black');
  }

  changeBg(color: string) {
    this.render.setStyle(this.el, 'backgroundColor', color);
  }
}
