import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { Department } from '@app/_models';
import { DepartmentService } from '@app/_services';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {
    id: number;
    department: Department = new Department();
    errorMessage: string;
    loading = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private departmentService: DepartmentService
    ) { }

    ngOnInit() {
        const idParam = this.route.snapshot.params['id'];
        this.id = idParam ? parseInt(idParam, 10) : null;
        
        if (this.id) {
            this.loading = true;
            this.departmentService.getById(this.id.toString())
                .pipe(first())
                .subscribe({
                    next: department => {
                        this.department = department;
                        this.loading = false;
                    },
                    error: error => {
                        this.errorMessage = error?.error?.message || 'An error occurred while loading the department';
                        this.loading = false;
                    }
                });
        } else {
            this.department = {
                id: null,
                name: '',
                description: '',
                employeeCount: 0
            };
        }
    }

    save() {
        this.loading = true;
        this.errorMessage = '';

        if (this.id) {
            this.departmentService.update(this.id.toString(), this.department)
                .pipe(first())
                .subscribe({
                    next: () => {
                        this.router.navigate(['/admin/departments']);
                    },
                    error: error => {
                        this.errorMessage = error?.error?.message || 'An error occurred while updating the department';
                        this.loading = false;
                    }
                });
        } else {
            this.departmentService.create(this.department)
                .pipe(first())
                .subscribe({
                    next: () => {
                        this.router.navigate(['/admin/departments']);
                    },
                    error: error => {
                        this.errorMessage = error?.error?.message || 'An error occurred while creating the department';
                        this.loading = false;
                    }
                });
        }
    }

    cancel() {
        this.router.navigate(['/admin/departments']);
    }
} 