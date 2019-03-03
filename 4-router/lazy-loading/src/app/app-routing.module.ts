import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyPreloading } from './mypreloading';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'lazy', 
    data: {
      mypreloading: false
    },
    loadChildren: './lazy/lazy.module#LazyModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: MyPreloading})],
  exports: [RouterModule],
  providers: [MyPreloading]
})
export class AppRoutingModule { }
