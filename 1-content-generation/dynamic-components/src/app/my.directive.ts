import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMy]'
})
export class MyDirective {

  constructor(public view: ViewContainerRef) { }

}
