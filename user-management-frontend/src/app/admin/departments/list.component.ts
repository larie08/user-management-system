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
        this.departmentService.getAll()
            .pipe(first())
            .subscribe(departments => this.departments = departments);
    }

    add() {
        this.router.navigate(['/admin/departments/add']);
    }

    edit(id: string) {
        this.router.navigate(['/admin/departments/edit', id]);
    }

    delete(id: string) {
        const department = this.departments.find(x => x.id === id);
        if (!department) return;
        if (confirm('Are you sure you want to delete this department?')) {
            this.departmentService.delete(id)
                .pipe(first())
                .subscribe(() => this.departments = this.departments.filter(x => x.id !== id));
        }
    }
} 