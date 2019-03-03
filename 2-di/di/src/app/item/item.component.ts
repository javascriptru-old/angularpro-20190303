import { Component, OnInit } from '@angular/core';
import { AuditService } from '../audit.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  // providers: [ AuditService],
  viewProviders: [ AuditService],
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
