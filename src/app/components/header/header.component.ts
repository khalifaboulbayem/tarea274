import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  appName: string = "Tarea 2.7"
  isAuthenticated: boolean = false;
  userProfilePic: string | null = null;

  constructor() { }

  ngOnInit(): void {
    this.isAuthenticated = false;
    if (this.isAuthenticated) {
      this.userProfilePic = "khalifa";
    }
  }

  login() {
    this.isAuthenticated = true;
    this.userProfilePic = "https://github.com/mdo.png";
  }

  logout() {
    this.isAuthenticated = false;
    this.userProfilePic = null;
  }
}
