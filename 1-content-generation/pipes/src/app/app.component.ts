import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  constructor() {
    setInterval(_ => {
      console.log('timer');
    }, 500);
  }
}
