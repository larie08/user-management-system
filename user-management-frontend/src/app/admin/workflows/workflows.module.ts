import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list.component';

const routes: Routes = [
    { path: '', component: ListComponent },
    { path: ':employeeId', component: ListComponent }
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ListComponent
    ]
})
export class WorkflowsModule { } 