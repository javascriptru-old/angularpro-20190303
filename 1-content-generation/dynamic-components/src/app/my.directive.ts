import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[my]'
})
export class MyDirective {

  constructor(public view: ViewContainerRef) { }

}
