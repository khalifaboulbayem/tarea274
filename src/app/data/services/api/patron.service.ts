import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patron } from '@models/patron';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatronService {

  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private apiUrl = 'http://localhost:8080/api/patrones';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Patron[]>{
    return this.http.get<Patron[]>(this.apiUrl);
  }

  getById(id : number): Observable<Patron>{
    return this.http.get<Patron>(`${this.apiUrl}/${id}`);
  }

  create(patron: Patron): Observable<Patron>{
    return this.http.post<Patron>(this.apiUrl, patron, this.httpHeaders);
  }



  remove(id: number) : Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`, this.httpHeaders);
  }
}
