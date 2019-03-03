import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ReflectiveInjector } from '@angular/core';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { LogService } from './log.service';
import { AdminService } from './admin.service';
import { ItemComponent } from './item/item.component';
import { ChildComponent } from './child/child.component';

// const injector = new ReflectiveInjector.resolveAndCreate([UserService]);
// const userService = injector.get(UserService);


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: UserService, useClass: UserService},
    AdminService,
    { provide: UserService, useFactory: (log) => {
      return new UserService();
    }, deps: [LogService] },
    { provide: UserService, useExisting: AdminService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
