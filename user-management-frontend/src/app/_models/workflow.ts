// Calderon
import { Employee } from './employee';

export type WorkflowType = 'ONBOARDING' | 'TRANSFER' | 'REQUEST';
export type WorkflowStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export interface WorkflowData {
    departmentId?: number;
    fromDepartmentId?: number;
    toDepartmentId?: number;
    requestDetails?: string;
    [key: string]: any;
}

export interface Workflow {
    id: number;
    type: WorkflowType;
    employee: Employee;
    status: WorkflowStatus;
    workflowData: WorkflowData;
    description: string;
    createdDate: Date;
    updatedDate: Date;
}