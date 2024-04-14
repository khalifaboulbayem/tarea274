import { Component } from '@angular/core';
import { Patron } from '@models/patron';

@Component({
  selector: 'app-patron',
  templateUrl: './patron.component.html',
  styleUrl: './patron.component.css'
})
export class PatronComponent {

  patrons: Patron[] = [
    { id: 1, name: 'Juan', phone: '123-456-7890' },
    { id: 2, name: 'María', phone: '234-567-8901' },
    { id: 3, name: 'Pedro', phone: '345-678-9012' },
    { id: 4, name: 'Ana', phone: '456-789-0123' },
    { id: 5, name: 'Luis', phone: '567-890-1234' },
    { id: 6, name: 'Laura', phone: '678-901-2345' },
    { id: 7, name: 'Carlos', phone: '789-012-3456' },
    { id: 8, name: 'Sofía', phone: '890-123-4567' },
    { id: 9, name: 'David', phone: '901-234-5678' },
    { id: 10, name: 'Elena', phone: '012-345-6789' }
  ];
}
