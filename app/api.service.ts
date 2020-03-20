import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl ="http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders()
  .set('Authorization',  `Basic ${btoa(AuthService.getToken())}`)
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any>{
    return this.http.get(this.baseurl + '/jal/products/',
    {headers : this.httpHeaders}
    );
  }
}
