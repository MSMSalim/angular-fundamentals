import { Directive, OnInit, Inject, ElementRef } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
  selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
  public el: HTMLElement;

  constructor(@Inject(JQ_TOKEN) private $: any, elementReference: ElementRef) {
      this.el = elementReference.nativeElement;
  }

  ngOnInit(): void {
    this.el.addEventListener('click', e => {
        this.$('#simple-modal').modal({});
    })
  }
}
