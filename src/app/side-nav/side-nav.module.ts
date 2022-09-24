import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideNavRoutingModule } from './side-nav-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    SideNavComponent
  ],
  exports: [
    SideNavComponent
  ],
  imports: [
    CommonModule,
    SideNavRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class SideNavModule { }
