import { Account } from './account';
import { Department } from './department';

export interface Employee {
    id?: string;
    employeeId: string;
    userId: number;
    position: string;
    departmentId?: number;
    hireDate: Date;
    status: 'Active' | 'Inactive';
    user?: Account;
    department?: Department;
} 