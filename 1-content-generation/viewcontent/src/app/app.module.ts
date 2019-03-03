import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ChildComponent } from './child/child.component';
import { UserService } from './user.service';
import { ColoryDirective } from './colory.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ChildComponent,
    ColoryDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
