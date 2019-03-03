import { Component, OnInit } from '@angular/core';
import { AuditService } from '../audit.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(audit: AuditService) { 
    audit.dosomething();
  }

  ngOnInit() {
  }

}
