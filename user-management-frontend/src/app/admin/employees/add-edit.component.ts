import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { Employee, Department } from '@app/_models';
import { EmployeeService, DepartmentService, AccountService } from '@app/_services';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {
    id: string;
    employee: Employee;
    departments: Department[] = [];
    users: any[] = [];
    errorMessage: string;
    loading = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private employeeService: EmployeeService,
        private departmentService: DepartmentService,
        private accountService: AccountService
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        
        // load departments for dropdown
        this.departmentService.getAll()
            .pipe(first())
            .subscribe({
                next: (departments) => {
                    this.departments = departments;
                },
                error: (error) => {
                    this.errorMessage = error;
                }
            });

        this.accountService.getAll()
            .pipe(first())
            .subscribe({
                next: (users) => {
                    if (this.id && this.employee && this.employee.userId) {
                        const employeeAccount = users.find(user => String(user.id) === String(this.employee.userId));
                        let filteredUsers = users.filter(user => (user as any).status === 'Active');
                        if (employeeAccount && (employeeAccount as any).status !== 'Active' && !filteredUsers.some(u => String(u.id) === String(employeeAccount.id))) {
                            filteredUsers = [employeeAccount, ...filteredUsers];
                        }
                        this.users = filteredUsers;
                    } else {
                        this.users = users.filter(user => (user as any).status === 'Active');
                    }
                },
                error: (error) => {
                    this.errorMessage = error;
                }
            });
        
        if (this.id) {
            this.employeeService.getById(this.id)
                .pipe(first())
                .subscribe({
                    next: (employee) => {
                        this.employee = employee;
                    },
                    error: (error) => {
                        this.errorMessage = error;
                    }
                });
        } else {
            this.employee = {
                employeeId: '',
                userId: 0,
                position: '',
                hireDate: new Date(),
                status: 'Active'
            };
        }
    }

    save() {
        this.loading = true;
        this.errorMessage = '';

        if (this.id) {
            this.employeeService.update(this.id, this.employee)
                .pipe(first())
                .subscribe({
                    next: () => {
                        this.router.navigate(['/admin/employees']);
                    },
                    error: error => {
                        this.errorMessage = error;
                        this.loading = false;
                    }
                });
        } else {
            this.employeeService.create(this.employee)
                .pipe(first())
                .subscribe({
                    next: () => {
                        this.router.navigate(['/admin/employees']);
                    },
                    error: error => {
                        this.errorMessage = error;
                        this.loading = false;
                    }
                });
        }
    }

    cancel() {
        this.router.navigate(['/admin/employees']);
    }
} 