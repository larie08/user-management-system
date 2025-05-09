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

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private departmentService: DepartmentService
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        
        if (this.id) {
            this.departmentService.getById(this.id)
                .pipe(first())
                .subscribe(department => this.department = department);
        } else {
            this.department = new Department();
        }
    }

    save() {
        if (this.id) {
            this.departmentService.update(this.id, this.department)
                .pipe(first())
                .subscribe({
                    next: () => {
                        this.router.navigate(['/admin/departments']);
                    },
                    error: error => {
                        this.errorMessage = error;
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
                    }
                });
        }
    }

    cancel() {
        this.router.navigate(['/admin/departments']);
    }
} 