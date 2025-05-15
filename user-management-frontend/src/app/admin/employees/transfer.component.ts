import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { Employee, Department } from '@app/_models';
import { EmployeeService, DepartmentService, AlertService } from '@app/_services';

@Component({ templateUrl: 'transfer.component.html' })
export class TransferComponent implements OnInit {
    id: string;
    employee: Employee;
    departments: Department[] = [];
    departmentId: number;
    loading = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private employeeService: EmployeeService,
        private departmentService: DepartmentService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        
        // Load departments for dropdown
        this.departmentService.getAll()
            .pipe(first())
            .subscribe(departments => this.departments = departments);
        
        // Load employee details
        this.employeeService.getById(this.id)
            .pipe(first())
            .subscribe(employee => {
                this.employee = employee;
                this.departmentId = employee.departmentId;
            });
    }

    transfer() {
        this.loading = true;
        this.employeeService.transfer(this.id, this.departmentId)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Employee transferred successfully', { keepAfterRouteChange: true });
                    this.router.navigate(['/admin/employees']);
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }

    cancel() {
        this.router.navigate(['/admin/employees']);
    }
}