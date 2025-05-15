import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { Department } from '@app/_models';
import { DepartmentService, AccountService } from '@app/_services';

@Component({
    selector: 'app-departments-list',
    templateUrl: 'list.component.html'
})
export class ListComponent implements OnInit {
    departments: Department[] = [];
    account = this.accountService.accountValue;

    constructor(
        private router: Router,
        private departmentService: DepartmentService,
        private accountService: AccountService
    ) { }

    ngOnInit() {
        this.loadDepartments();
    }

    loadDepartments() {
        console.log('Loading departments...');
        this.departmentService.getAll()
            .pipe(first())
            .subscribe({
                next: departments => {
                    console.log('Departments loaded:', departments);
                    this.departments = departments;
                },
                error: error => {
                    console.error('Error loading departments:', error);
                }
            });
    }

    add() {
        this.router.navigate(['/admin/departments/add']);
    }

    edit(id: number) {
        console.log('Editing department with ID:', id);
        if (!id) {
            console.error('Cannot edit department: Invalid ID');
            return;
        }
        this.router.navigate(['/admin/departments/edit', id]);
    }

    delete(id: number) {
        console.log('Deleting department with ID:', id);
        const department = this.departments.find(x => x.id === id);
        if (!department) {
            console.error('Cannot delete department: Department not found');
            return;
        }
        if (confirm('Are you sure you want to delete this department?')) {
            this.departmentService.delete(id.toString())
                .pipe(first())
                .subscribe({
                    next: () => {
                        console.log('Department deleted successfully');
                        this.departments = this.departments.filter(x => x.id !== id);
                    },
                    error: error => {
                        console.error('Error deleting department:', error);
                    }
                });
        }
    }
} 