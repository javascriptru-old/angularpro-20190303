import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild, AfterViewInit } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { MyDirective } from './my.directive';
import { Banner2Component } from './banner2/banner2.component';

@Component({
  selector: 'app-root',
  template: `VIEW
  
      <div *my>
      </div>

      <ng-container *ngComponentOutlet="mybanner">
      </ng-container>
  
  `,
})
export class AppComponent implements AfterViewInit{

  mybanner: any;

  @ViewChild(MyDirective, { read: MyDirective}) my: MyDirective; 

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private view: ViewContainerRef) {

    this.mybanner = BannerComponent;

    setTimeout(_ => {
      this.mybanner = Banner2Component;
    }, 3000);

  }

  ngAfterViewInit() {
    const bannerComponentFactory = this.componentFactoryResolver.resolveComponentFactory(BannerComponent);
    //const bannerComponent = this.view.createComponent(bannerComponentFactory);
    const bannerComponent = this.my.view.createComponent(bannerComponentFactory);
    
  }
}
