import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@data/services/api/auth.service';
import { StorageService } from '@data/services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  username:string = ''
  email:string = ''
  password:string = ''
  isSubmitting:boolean = false
  validationErrors:any = []
  message: any;

  constructor(public authService: AuthService, private router: Router, private storageService: StorageService) {}

  ngOnInit(): void {
    if(localStorage.getItem('token') != "" && localStorage.getItem('token') != null){
      this.router.navigateByUrl('/dashboard')
    }
  }

  registerAction() {
    this.isSubmitting = true;
    let user = {
      username:this.username,
      email:this.email,
      password:this.password,
    }

    this.authService.register(user).subscribe(
      (data: any) => {
        this.message = data.message;
        this.username= "";
        this.email= "";
        this.password= "";

      },
      (error) => {
        this.isSubmitting = false;
      if (error.response.data.errors != undefined) {
        this.validationErrors = error.response.data.errors
      }

      return error
      })
  }

}
