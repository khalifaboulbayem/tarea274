import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) { }

  login(user:any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, user, this.httpOptions);
  }

  //metodo para registar nuevo usuario
  register(user:any): Observable<any>{
    console.log(user);
    return this.http.post<any>(`${this.apiUrl}/register`, user, this.httpOptions);
  }

  //metodo para cerrar session.
  // logout(): Observable<any>{
  //   return this.http.post<any>(`${this.apiUrl}/logout`, this.httpOptions);
  // }

  getUser(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user`, { headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}});
  }
}
