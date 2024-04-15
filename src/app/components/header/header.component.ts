import { Component, OnInit } from '@angular/core';
import { AuthService } from '@data/services/api/auth.service';
import { UserService } from '@data/services/user.service';
import { User } from '@models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  appName: string = "Tarea 2.7"
  isAuthenticated: boolean = false;
  user: User | null = null;
  userProfilePic: string | null = "https://github.com/mdo.png";

  constructor(private userService : UserService, private authService : AuthService) { }

  ngOnInit(): void {

    this.isAuthenticated = this.userService.isLoggedIn();
    if (this.isAuthenticated) {
         this.authService.getUser().subscribe(
          (data: any) => {
            this.user = data;
          });
    }
  }
}
