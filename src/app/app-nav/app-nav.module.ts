import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppNavRoutingModule } from './app-nav-routing.module';
import { MainHallComponent } from './house-a/main-hall/main-hall/main-hall.component';



@NgModule({
  declarations: [

  
    MainHallComponent
  ],
  imports: [
    CommonModule,
    AppNavRoutingModule
  ]
})
export class AppNavModule { }
