import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  tokenKey: string = "token"
  constructor() { }

  public cleanSession(): void {
    localStorage.setItem(this.tokenKey, "");
  }

  public isLoggedIn(): boolean {
    const user = localStorage.getItem(this.tokenKey);
    if (user) {
      return true;
    }
    return false;
  }

  public getToken(): any  {
      const userToken = window.sessionStorage.getItem(this.tokenKey);
      if (userToken) {
        return userToken;
      }

      return null;
  }


}
