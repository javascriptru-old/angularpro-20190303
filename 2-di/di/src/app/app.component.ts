import { Component, Optional, Self, SkipSelf, Host } from '@angular/core';
import { UserService } from './user.service';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, LogService],
  viewProviders: [UserService, LogService],
})
export class AppComponent {
  title = 'di';

  constructor(@Host() userService: UserService) {

  }
}

// @Component
// @Directive
// @Pipe
// @Injectable(
//   provideIn: 'root'
// )
// 