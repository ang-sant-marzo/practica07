import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../models/proveedor.model';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './directiva-ng-for.component.html',
  styleUrls: ['./directiva-ng-for.component.css']
})
export class DirectivaNgForComponent implements OnInit {

  proveedores: Proveedor[] = [
    new Proveedor('Gas Natural', 'A12345678'),
    new Proveedor('Telefónica', 'A87654321'),
    new Proveedor('Jazztel', 'A1111222'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
