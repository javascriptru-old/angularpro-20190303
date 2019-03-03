import { Component, OnInit, ContentChild, AfterContentInit, ContentChildren, QueryList, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { UserService } from '../user.service';
import { ColoryDirective } from '../colory.directive';

@Component({
  selector: 'app-item',
  template: `  
  VIEW

  <ng-content select=".title"></ng-content>
  <ng-content select="main"></ng-content>
  

  <div colory #c="colory">TEXT</div>

  <button (click)="c.changeColor('green')">Make Green!</button>
  <input (input)="c.changeColor($event.target.value)">


  `,
})
export class ItemComponent implements OnInit, AfterContentInit {

  @ContentChild('h') content;
  // @ContentChild(ChildComponent) child;
  @ContentChild(UserService, { read: ChildComponent}) child;

  @ContentChildren ('h') elements: QueryList<ElementRef>;

  @ViewChild('h') view; 
  // @ViewChildren
  // @ViewChild(ColoryDirective, {read: ColoryDirective}) coloryDirective; 

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

}
