import { Employee } from './employee';

export interface RequestItem {
    name: string;
    quantity: number;
}

export interface Request {
    id: number;
    type: string;
    employee: Employee;
    requestItems: RequestItem[];
    status: string;
    createdDate: Date;
} 