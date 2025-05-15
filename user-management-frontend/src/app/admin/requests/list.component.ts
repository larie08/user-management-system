import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../../_services/account.service';
import { RequestService } from '../../_services/request.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
    requests: any[] = [];
    account: any;
    errorMessage: string = '';
    showModal: boolean = false;
    selectedId: number = null;
    employeeId: number = null;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private requestService: RequestService,
        private accountService: AccountService
    ) {
        this.account = this.accountService.accountValue;
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.employeeId = params['employeeId'];
            this.loadRequests();
        });
    }

    loadRequests() {
        if (this.employeeId) {
            this.requestService.getByEmployeeId(this.employeeId)
                .subscribe({
                    next: (requests) => {
                        this.requests = requests;
                    },
                    error: (error) => {
                        console.error('Error loading requests:', error);
                        this.errorMessage = 'Error loading requests';
                    }
                });
        } else {
            this.requestService.getAll()
                .subscribe({
                    next: (requests) => {
                        this.requests = requests;
                    },
                    error: (error) => {
                        console.error('Error loading requests:', error);
                        this.errorMessage = 'Error loading requests';
                    }
                });
        }
    }

    viewAll() {
        this.loadRequests();
    }

    add() {
        this.selectedId = null;
        this.showModal = true;
    }

    edit(id: number) {
        this.selectedId = id;
        this.showModal = true;
    }

    closeModal() {
        this.showModal = false;
        this.selectedId = null;
        this.loadRequests();
    }

    delete(id: number) {
        if (confirm('Are you sure you want to delete this request?')) {
            this.requestService.delete(id)
                .subscribe({
                    next: () => {
                        this.loadRequests();
                    },
                    error: (error) => {
                        console.error('Error deleting request:', error);
                        this.errorMessage = 'Error deleting request';
                    }
                });
        }
    }
}
