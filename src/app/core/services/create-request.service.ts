import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CreateRequestService {
  private http = inject(HttpClient);
  constructor() {}
  get<T>(endpoint: string) {
    return this.http.get<T>(endpoint);
  }
  post<T>(endpoint: string, data: any) {
    return this.http.post<T>(endpoint, data);
  }
  delete<T>(endpoint: string) {
    return this.http.delete<T>(endpoint);
  }
  put<T>(endpoint: string, data: any) {
    return this.http.put<T>(endpoint, data);
  }
}
