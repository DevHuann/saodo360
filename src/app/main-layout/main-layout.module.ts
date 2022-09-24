import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {SideNavModule} from "../side-nav/side-nav.module";
import {ControlButtonModule} from "../control-button/control-button.module";



@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    SideNavModule,
    ControlButtonModule,

  ]
})
export class MainLayoutModule { }
