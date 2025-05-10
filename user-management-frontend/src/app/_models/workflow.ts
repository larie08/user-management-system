import { Employee } from './employee';

export interface Workflow {
    id: number;
    type: string;
    employee: Employee;
    details: any;
    status: string;
    createdDate: Date;
} 