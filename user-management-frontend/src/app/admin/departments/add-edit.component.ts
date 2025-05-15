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
        console.log('AddEditComponent initialized');
        const idParam = this.route.snapshot.params['id'];
        this.id = idParam ? parseInt(idParam, 10) : null;
        console.log('Department ID from route:', this.id);
        
        if (this.id) {
            this.loading = true;
            console.log('Fetching department data for ID:', this.id);
            this.departmentService.getById(this.id.toString())
                .pipe(first())
                .subscribe({
                    next: department => {
                        console.log('Department data received:', department);
                        this.department = department;
                        this.loading = false;
                    },
                    error: error => {
                        console.error('Error fetching department:', error);
                        this.errorMessage = error?.error?.message || 'An error occurred while loading the department';
                        this.loading = false;
                    }
                });
        } else {
            console.log('Creating new department');
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
        console.log('Saving department:', this.department);

        if (this.id) {
            this.departmentService.update(this.id.toString(), this.department)
                .pipe(first())
                .subscribe({
                    next: (updatedDepartment) => {
                        console.log('Department updated successfully:', updatedDepartment);
                        this.router.navigate(['/admin/departments']);
                    },
                    error: error => {
                        console.error('Error updating department:', error);
                        this.errorMessage = error?.error?.message || 'An error occurred while updating the department';
                        this.loading = false;
                    }
                });
        } else {
            this.departmentService.create(this.department)
                .pipe(first())
                .subscribe({
                    next: (newDepartment: Department) => {
                        console.log('Department created successfully:', newDepartment);
                        // Update the department object with the server-assigned ID
                        this.department = newDepartment;
                        this.router.navigate(['/admin/departments']);
                    },
                    error: error => {
                        console.error('Error creating department:', error);
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