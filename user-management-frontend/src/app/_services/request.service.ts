import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '@app/_models/request';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class RequestService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Request[]>(`${environment.apiUrl}/requests`);
    }

    getById(id: number) {
        return this.http.get<Request>(`${environment.apiUrl}/requests/${id}`);
    }

    getByEmployeeId(employeeId: number) {
        return this.http.get<Request[]>(`${environment.apiUrl}/requests/employee/${employeeId}`);
    }

    create(request: Request) {
        return this.http.post(`${environment.apiUrl}/requests`, request);
    }

    update(id: number, request: Request) {
        return this.http.put(`${environment.apiUrl}/requests/${id}`, request);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/requests/${id}`);
    }
} 