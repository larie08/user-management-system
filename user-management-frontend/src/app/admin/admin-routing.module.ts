import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubNavComponent } from './subnav.component';
import { LayoutComponent } from './layout.component';
import { OverviewComponent } from './overview.component';

const accountsModule = () => import('./accounts/accounts.module').then(x => x.AccountsModule);
const requestsModule = () => import('./requests/requests.module').then(x => x.RequestsModule);
const workflowsModule = () => import('./workflows/workflows.module').then(x => x.WorkflowsModule); // Added definition for workflowsModule

const routes: Routes = [
    { path : '', component: SubNavComponent, outlet: 'subnav' },
    {
        path : '', component: LayoutComponent,
        children: [
            { path : '', component: OverviewComponent },
            { path : 'accounts', loadChildren: accountsModule },
            { path : 'departments', loadChildren: () => import('./departments/departments.module').then(x => x.DepartmentsModule) },
            { path : 'employees', loadChildren: () => import('./employees/employees.module').then(x => x.EmployeesModule) },
            { path : 'requests', loadChildren: requestsModule },
            { path : 'workflows', loadChildren: workflowsModule } // Fixed reference to workflowsModule

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }