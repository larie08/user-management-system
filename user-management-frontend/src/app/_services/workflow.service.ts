// Calderon
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workflow } from '@app/_models/workflow';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class WorkflowService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Workflow[]>(`${environment.apiUrl}/workflows`);
    }

    getById(id: number) {
        return this.http.get<Workflow>(`${environment.apiUrl}/workflows/${id}`);
    }

    getByEmployeeId(employeeId: number) {
        return this.http.get<Workflow[]>(`${environment.apiUrl}/workflows/employee/${employeeId}`);
    }

    create(workflow: Workflow) {
        return this.http.post(`${environment.apiUrl}/workflows`, workflow);
    }

    update(id: number | string, workflow: Workflow) {
        // Ensure ID is a number
        const numericId = typeof id === 'string' ? parseInt(id) : id;
        console.log(`WorkflowService: Updating workflow ${numericId}`, workflow);
        return this.http.put(`${environment.apiUrl}/workflows/${numericId}`, workflow);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/workflows/${id}`);
    }
} 