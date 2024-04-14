import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PatronService } from '@data/services/api/patron.service';
import { Patron } from '@models/patron';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent implements OnInit {

  patrons: Patron[] = [];
  constructor(private patronService: PatronService) { }

  ngOnInit(): void {
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

