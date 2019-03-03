import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<h1 (click)="onClick()">Hello, {{name.name}}!</h1>`,
})
export class HelloComponent implements OnInit {

  @Input() name: {name : string};
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.clicked.emit(this.name.name);
  }

}
