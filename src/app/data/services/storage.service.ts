import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageService {




  token:string = 'token';
  constructor() { }

  clean(): void {
    window.localStorage.clear();
  }

  public saveUser(token: string): void {
    window.localStorage.removeItem(this.token);
    window.localStorage.setItem(this.token, token);
  }

  public getUser(): any {
    const user = window.localStorage.getItem(this.token);
    if (user) {
      return user;
    }
    return null;
  }

  public isLoggedIn(): boolean {
    const user = window.localStorage.getItem(this.token);
    if (user) {
      return true;
    }
    return false;
  }
}
