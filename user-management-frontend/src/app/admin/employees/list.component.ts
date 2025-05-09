import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { Employee } from '@app/_models';
import { EmployeeService, AccountService } from '@app/_services';

@Component({
    selector: 'app-employees-list',
    templateUrl: 'list.component.html'
})
export class ListComponent implements OnInit {
    employees: Employee[] = [];
    account = this.accountService.accountValue;

    constructor(
        private router: Router,
        private employeeService: EmployeeService,
        private accountService: AccountService
    ) { }

    ngOnInit() {
        this.loadEmployees();
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

    add() {
        this.router.navigate(['/admin/employees/add']);
    }

    edit(id: string) {
        this.router.navigate(['/admin/employees/edit', id]);
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