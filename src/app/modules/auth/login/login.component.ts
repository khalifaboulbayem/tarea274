import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@data/services/api/auth.service';
import { StorageService } from '@data/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isSubmitting: boolean = false;
  validationErrors: Array<any> = [];

  constructor(private authService: AuthService, private router: Router, private storageService: StorageService) {}

  ngOnInit(): void {
    if (
      localStorage.getItem('token') != '' &&
      localStorage.getItem('token') != null
    ) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  loginAction() {
    this.isSubmitting = true;
    let user = {
      username: this.username,
      password: this.password,
    };
    this.authService.login(user).subscribe(
      (data: any) => {
        localStorage.setItem('token', data.token);
        this.router.navigateByUrl('/dashboard');

      },
      (error) => {
        this.isSubmitting = false;
        if (error.response.data.errors != undefined) {
          this.validationErrors = error.response.data.message;
        }
        if (error.response.data.error != undefined) {
          this.validationErrors = error.response.data.error;
        }
        return error;
      }
    );
  }

}
