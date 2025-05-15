import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';
import { RequestsRoutingModule } from './requests-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RequestsRoutingModule
    ],
    declarations: [
        ListComponent,
        AddEditComponent
    ]
})
export class RequestsModule { } 