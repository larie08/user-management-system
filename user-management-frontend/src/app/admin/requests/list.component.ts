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
    selectedEmployeeId: number = null;

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
            console.log('Route params:', params);
            if (params['employeeId']) {
                this.employeeId = Number(params['employeeId']);
                this.selectedEmployeeId = this.employeeId;
                console.log('Parsed employeeId:', this.employeeId);
                console.log('Set selectedEmployeeId:', this.selectedEmployeeId);
            } else {
                // Try to get employeeId from account service
                const accountEmployeeId = this.accountService.accountValue?.employeeId;
                if (accountEmployeeId) {
                    this.employeeId = Number(accountEmployeeId);
                    this.selectedEmployeeId = this.employeeId;
                    console.log('Set employeeId from account service:', this.employeeId);
                } else {
                    console.error('No employeeId available');
                }
            }
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

    add() {
        this.selectedId = null;
        this.showModal = true;
        if (this.employeeId) {
            this.selectedEmployeeId = Number(this.employeeId);
            console.log('Setting selectedEmployeeId for new request:', this.selectedEmployeeId);
        } else {
            // Try to get employeeId from account service
            const accountEmployeeId = this.accountService.accountValue?.employeeId;
            if (accountEmployeeId) {
                this.selectedEmployeeId = Number(accountEmployeeId);
                console.log('Setting selectedEmployeeId from account service:', this.selectedEmployeeId);
            } else {
                console.error('No employeeId available');
                this.errorMessage = 'Employee ID is required';
            }
        }
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

    getItemsSummary(request: any): string {
        if (!request.items || request.items.length === 0) return '';
        return request.items.map((item: any) => `${item.name} (${item.quantity})`).join(', ');
    }

    status(id: number, newStatus: string) {
        if (!confirm(`Are you sure you want to set this request to ${newStatus}?`)) return;
        const req = this.requests.find(r => r.id === id);
        if (!req) {
            this.errorMessage = 'Request not found.';
            return;
        }
        const updatedRequest = { ...req, status: newStatus };
        this.requestService.update(id, updatedRequest)
            .subscribe({
                next: () => {
                    this.loadRequests();
                },
                error: (error) => {
                    console.error(`Error updating status for request ${id}:`, error);
                    this.errorMessage = `Error updating status: ${error.error?.message || error.message}`;
                }
            });
    }
}
