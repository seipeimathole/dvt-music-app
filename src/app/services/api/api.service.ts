import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = `${environment.proxyUrl}/${environment.apiUrl}`
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
  }

  get<T>(path: string): Observable<T> {
    return this.http.get<T>(this.baseUrl + path, { headers: this.headers });
  }

  post() { }

  put() { }

  delete() { }
}
