import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[delay]'
})
export class DelayDirective implements OnInit {

  @Input('delay') delay: number;
  @Input('delayTitle') title: number;

  constructor(private templateRef: TemplateRef<HTMLElement>,
    private view: ViewContainerRef) { }

  ngOnInit() {
    setTimeout(_ => {
      this.view.createEmbeddedView(this.templateRef);
    }, this.delay);
  }  

}
