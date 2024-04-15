import { UserService } from '@data/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@data/services/api/auth.service';
import { User } from '@models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  user!:User;

  constructor(public authService: AuthService, private router: Router, private userService : UserService) {}

  ngOnInit(): void {
   if(this.userService.getToken() == "" || localStorage.getItem('token') == null){
      this.router.navigateByUrl('/')
    }else {
      this.authService.getUser().subscribe(
        (data: any) => {
          console.log(data);
          this.user = data;
        });
    }
  }

  logoutAction () {
    this.userService.cleanSession();
    this.router.navigateByUrl('/');
  }
}
