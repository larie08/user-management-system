import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkflowService } from '../../_services/workflow.service';
import { AccountService } from '../../_services/account.service';
import { Workflow } from '../../_models/workflow';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    // styleUrls: ['/list.component.css']
})
export class ListComponent implements OnInit {
    workflows: any[] = [];
    account: any;
    errorMessage: string = '';
    employeeId: number = null;
    showModal: boolean = false;
    selectedWorkflowId: number = null;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private workflowService: WorkflowService,
        private accountService: AccountService
    ) {
        this.account = this.accountService.accountValue;
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            console.log('Route params:', params);
            if (params['employeeId']) {
                this.employeeId = Number(params['employeeId']);
                console.log('Parsed employeeId:', this.employeeId);
            } else {
                // Try to get employeeId from account service
                const accountEmployeeId = this.accountService.accountValue?.employeeId;
                if (accountEmployeeId) {
                    this.employeeId = Number(accountEmployeeId);
                    console.log('Set employeeId from account service:', this.employeeId);
                } else {
                    console.error('No employeeId available');
                }
            }
            this.loadWorkflows();
        });
    }

    loadWorkflows() {
        if (this.employeeId) {
            this.workflowService.getByEmployeeId(this.employeeId)
                .subscribe({
                    next: (workflows) => {
                        this.workflows = workflows;
                    },
                    error: (error) => {
                        console.error('Error loading workflows:', error);
                        this.errorMessage = 'Error loading workflows';
                    }
                });
        } else {
            this.workflowService.getAll()
                .subscribe({
                    next: (workflows) => {
                        this.workflows = workflows;
                    },
                    error: (error) => {
                        console.error('Error loading workflows:', error);
                        this.errorMessage = 'Error loading workflows';
                    }
                });
        }
    }

    addWorkflow() {
        this.selectedWorkflowId = null;
        this.showModal = true;
    }

    editWorkflow(id: number) {
        this.selectedWorkflowId = id;
        this.showModal = true;
    }

    closeModal() {
        this.showModal = false;
        this.selectedWorkflowId = null;
        this.loadWorkflows();
    }

    deleteWorkflow(id: number) {
        if (confirm('Are you sure you want to delete this workflow?')) {
            this.workflowService.delete(id)
                .subscribe({
                    next: () => {
                        this.loadWorkflows();
                    },
                    error: (error) => {
                        console.error('Error deleting workflow:', error);
                        this.errorMessage = 'Error deleting workflow';
                    }
                });
        }
    }

    updateWorkflowStatus(workflow: any, newStatus: string) {
        console.log('Updating workflow:', workflow);
        console.log('New status:', newStatus);

        // Create a copy of the workflow with the new status
        const updatedWorkflow = {
            ...workflow,
            status: newStatus
        };

        this.workflowService.update(workflow.id, updatedWorkflow)
            .subscribe({
                next: (response) => {
                    console.log('Workflow updated successfully:', response);
                    
                    // Update the workflow in the local array
                    const index = this.workflows.findIndex(w => w.id === workflow.id);
                    if (index !== -1) {
                        this.workflows[index].status = newStatus;
                        // Create a new array reference to trigger change detection
                        this.workflows = [...this.workflows];
                    }
                },
                error: (error) => {
                    console.error('Error updating workflow:', error);
                    this.errorMessage = 'Error updating workflow status';
                    // Revert the status in case of error
                    const index = this.workflows.findIndex(w => w.id === workflow.id);
                    if (index !== -1) {
                        this.workflows[index].status = workflow.status;
                        // Create a new array reference to trigger change detection
                        this.workflows = [...this.workflows];
                    }
                }
            });
    }

    // Helper methods for displaying workflow details
    isObject(value: any): boolean {
        return value !== null && typeof value === 'object';
    }
    
    getObjectKeys(obj: any): string[] {
        return Object.keys(obj);
    }

    goBackToEmployees() {
        this.router.navigate(['/admin/employees']);
    }
}