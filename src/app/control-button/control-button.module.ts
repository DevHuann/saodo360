import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlButtonRoutingModule } from './control-button-routing.module';
import { ControlButtonComponent } from './control-button/control-button.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    declarations: [
        ControlButtonComponent
    ],
    exports: [
        ControlButtonComponent
    ],
    imports: [
        CommonModule,
        ControlButtonRoutingModule,
        MatIconModule
    ]
})
export class ControlButtonModule { }
