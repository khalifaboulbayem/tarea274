import { Component, OnInit } from '@angular/core';
import { PatronService } from '@data/services/api/patron.service';
import { UserService } from '@data/services/user.service';
import { Patron } from '@models/patron';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent implements OnInit {

  isAuthenticated: boolean = false;
  patrons: Patron[] = [];
  constructor(private patronService: PatronService, private userService: UserService) { }

  ngOnInit(): void {
    this.isAuthenticated = this.userService.isLoggedIn();
    this.patronService.getAll().subscribe(
      (data: Patron[]) => this.patrons = data,
      error => console.log(error)
    );
  }
  remove(id: number): void {
    this.patronService.remove(id).subscribe(
      (res) => {
        this.patrons = this.patrons.filter(item => item.id !== id);
        console.log(res);
      },
      error => {
        console.error('Error al eliminar el registro:', error);
      }
    );
  }


}

