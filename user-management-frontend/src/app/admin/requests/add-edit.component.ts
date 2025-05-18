import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../../_services/request.service';
import { AccountService } from '../../_services/account.service';

@Component({
    selector: 'app-add-edit',
    templateUrl: './add-edit.component.html'
})
export class AddEditComponent implements OnInit {
    @Input() id: number;
    @Input() employeeId: number;
    @Output() close = new EventEmitter<void>();
    
    request: any = {
        type: '',
        items: [],
        requestItems: [],
        employeeId: null
    };
    errorMessage: string = '';
    loading: boolean = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private requestService: RequestService,
        private accountService: AccountService
    ) { }

    ngOnInit() {
        console.log('Component initialized with employeeId:', this.employeeId);
        
        // Set the employeeId from the input
        if (this.employeeId) {
            this.request.employeeId = Number(this.employeeId);
            console.log('Set employeeId in request:', this.request.employeeId);
        } else {
            // Try to get employeeId from route params
            this.route.params.subscribe(params => {
                if (params['employeeId']) {
                    this.request.employeeId = Number(params['employeeId']);
                    console.log('Set employeeId from route params:', this.request.employeeId);
                } else {
                    // Try to get from account service as last resort
                    const accountEmployeeId = this.accountService.accountValue?.employeeId;
                    if (accountEmployeeId) {
                        this.request.employeeId = Number(accountEmployeeId);
                        console.log('Set employeeId from account service:', this.request.employeeId);
                    } else {
                        console.error('No employeeId available from any source');
                        this.errorMessage = 'Employee ID is required';
                    }
                }
            });
        }
        
        if (this.id) {
            this.loadRequest();
        }
    }

    loadRequest() {
        this.loading = true;
        this.requestService.getById(this.id)
            .subscribe({
                next: (request) => {
                    this.request = request;
                    this.loading = false;
                },
                error: (error) => {
                    console.error('Error loading request:', error);
                    this.errorMessage = 'Error loading request';
                    this.loading = false;
                }
            });
    }

    addItem() {
        this.request.items.push({ name: '', quantity: 1 });
    }

    removeItem(index: number) {
        this.request.items.splice(index, 1);
    }

    save() {
        // Ensure employeeId is set
        if (!this.request.employeeId) {
            if (this.employeeId) {
                this.request.employeeId = Number(this.employeeId);
            } else {
                const accountEmployeeId = this.accountService.accountValue?.employeeId;
                if (accountEmployeeId) {
                    this.request.employeeId = Number(accountEmployeeId);
                }
            }
        }

        console.log('Current account value:', this.accountService.accountValue);
        console.log('Saving request with data:', {
            employeeId: this.request.employeeId,
            type: this.request.type,
            items: this.request.items
        });

        // Validate request
        if (!this.request.type) {
            this.errorMessage = 'Please select a request type';
            return;
        }
        if (!this.request.items || this.request.items.length === 0) {
            this.errorMessage = 'Please add at least one item';
            return;
        }
        if (!this.request.employeeId) {
            this.errorMessage = 'Employee ID is required';
            return;
        }

        // Ensure both items and requestItems are synchronized
        this.request.requestItems = [...this.request.items];

        this.loading = true;
        if (this.id) {
            this.requestService.update(this.id, this.request)
                .subscribe({
                    next: () => {
                        this.close.emit();
                    },
                    error: (error) => {
                        console.error('Error updating request:', error);
                        this.errorMessage = 'Error updating request';
                        this.loading = false;
                    }
                });
        } else {
            console.log('Creating new request with data:', this.request);
            this.requestService.create(this.request)
                .subscribe({
                    next: () => {
                        this.close.emit();
                    },
                    error: (error) => {
                        console.error('Error creating request:', error);
                        console.error('Request data that failed:', this.request);
                        this.errorMessage = error.error?.message || 'Error creating request';
                        this.loading = false;
                    }
                });
        }
    }

    cancel() {
        this.close.emit();
    }
}
