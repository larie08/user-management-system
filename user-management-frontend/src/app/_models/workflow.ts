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
    requestType: WorkflowType;
    requestId: string;
    status: WorkflowStatus;
    initiatedBy: number;
    assignedTo?: number;
    description: string;
    workflowData?: WorkflowData;
    employeeId: number;
    createdAt: Date;
    updatedAt: Date;
}