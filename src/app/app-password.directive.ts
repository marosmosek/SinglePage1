import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPassword]'
})
export class AppPasswordDirective {
  private _shown = false;
  constructor(private el: ElementRef) {
      this.setup();
    }
  toggle(span: HTMLElement) {
      this._shown = !this._shown;
      if (this._shown) {
        this.el.nativeElement.setAttribute('type', 'text');
        span.innerHTML = '<div class="PassBtn input-group-append"><span class="input-group-text PassBtnText">Hide</span></div>';
      } else {
        this.el.nativeElement.setAttribute('type', 'password');
        span.innerHTML = '<div class="PassBtn input-group-append"><span class="input-group-text PassBtnText">Show</span></div>';
      }
    }
  setup() {
      const parent = this.el.nativeElement.parentNode.parentNode;
      const span = document.createElement('span');
      span.innerHTML = '<div class="PassBtn input-group-append"><span class="input-group-text PassBtnText">Show</span></div>';
      span.addEventListener('click', (event) => {
        this.toggle(span);
      });
      parent.appendChild(span);
    }
  }
