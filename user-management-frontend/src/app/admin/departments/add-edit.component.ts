import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { Department } from '@app/_models';
import { DepartmentService } from '@app/_services';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {
    id: string;
    department: Department;
    errorMessage: string;
    loading = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private departmentService: DepartmentService
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        
        if (this.id) {
            this.loading = true;
            this.departmentService.getById(this.id)
                .pipe(first())
                .subscribe({
                    next: department => {
                        this.department = department;
                        this.loading = false;
                    },
                    error: error => {
                        this.errorMessage = error;
                        this.loading = false;
                    }
                });
        } else {
            this.department = new Department();
        }
    }

    save() {
        this.loading = true;
        this.errorMessage = '';

        if (this.id) {
            this.departmentService.update(this.id, this.department)
                .pipe(first())
                .subscribe({
                    next: () => {
                        this.router.navigate(['/admin/departments']);
                    },
                    error: error => {
                        this.errorMessage = error;
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
                        this.errorMessage = error;
                        this.loading = false;
                    }
                });
        }
    }

    cancel() {
        this.router.navigate(['/admin/departments']);
    }
} 