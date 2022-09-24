import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MaingateComponent} from "../app-nav/maingate/maingate.component";
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {MainHallComponent} from "../app-nav/house-a/main-hall/main-hall.component";


const routes: Routes = [{path:'',component:MainLayoutComponent,
children:
[
  {path:'',component:MaingateComponent},
  {path:'main-hall',component:MainHallComponent}
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
