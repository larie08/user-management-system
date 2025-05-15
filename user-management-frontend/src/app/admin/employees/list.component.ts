import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { Employee, Department } from '@app/_models';
import { EmployeeService, AccountService, DepartmentService } from '@app/_services';

@Component({
    selector: 'app-employees-list',
    templateUrl: 'list.component.html'
})
export class ListComponent implements OnInit {
    employees: Employee[] = [];
    departments: Department[] = [];
    account = this.accountService.accountValue;

    constructor(
        private router: Router,
        private employeeService: EmployeeService,
        private accountService: AccountService,
        private departmentService: DepartmentService
    ) { }

    ngOnInit() {
        this.loadDepartments();
        this.loadEmployees();
    }

    loadDepartments() {
        this.departmentService.getAll()
            .pipe(first())
            .subscribe(departments => this.departments = departments);
    }

    loadEmployees() {
        this.employeeService.getAll()
            .pipe(first())
            .subscribe({
                next: (employees) => {
                    console.log('Received employees:', employees);
                    this.employees = employees;
                },
                error: (error) => {
                    console.error('Error loading employees:', error);
                }
            });
    }

    getDepartmentName(employee: Employee): string {
        // Prefer department object if present (fake backend)
        if (employee.department && employee.department.name) {
            return employee.department.name;
        }
        // Otherwise, look up by departmentId (real backend)
        const dept = this.departments.find(d => d.id === employee.departmentId);
        return dept ? dept.name : '';
    }

    add() {
        this.router.navigate(['/admin/employees/add']);
    }

    edit(id: string) {
        this.router.navigate(['/admin/employees/edit', id]);
    }
    
    transfer(id: string) {
        this.router.navigate(['/admin/employees/transfer', id]);
    }

    delete(id: string) {
        const employee = this.employees.find(x => x.id === id);
        if (!employee) return;
        if (confirm('Are you sure you want to delete this employee?')) {
            this.employeeService.delete(id)
                .pipe(first())
                .subscribe(() => this.employees = this.employees.filter(x => x.id !== id));
        }
    }
}