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
    @Output() close = new EventEmitter<void>();
    
    request: any = {
        type: '',
        items: [],
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
        // Set the employeeId from the current user's account
        this.request.employeeId = this.accountService.accountValue?.employeeId;
        
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
            this.requestService.create(this.request)
                .subscribe({
                    next: () => {
                        this.close.emit();
                    },
                    error: (error) => {
                        console.error('Error creating request:', error);
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
