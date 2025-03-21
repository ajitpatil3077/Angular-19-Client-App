import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:8000/api/users';
  
  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getUserbyId(val:number): Observable<any> {
    console.log(`${this.apiUrl}/${val}`);
    return this.http.get(`${this.apiUrl}/${val}`);
  }
}



