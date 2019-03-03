import { Component, OnInit, Input, Attribute } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // @Input('title') title

  constructor(@Attribute('title') public title: string = 'Something really good!') { 
    console.log(title);
  }

  ngOnInit() {
  }

  dosomething() {

  }

}
