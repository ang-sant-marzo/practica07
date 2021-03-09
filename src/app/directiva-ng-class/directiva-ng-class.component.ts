import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-class',
  templateUrl: './directiva-ng-class.component.html',
  styleUrls: ['./directiva-ng-class.component.css']
})
export class DirectivaNgClassComponent implements OnInit {

  jugadores = [
    {nombre: 'Kyle Kuzma', equipo: 'lakers'},
    {nombre: 'Aron Bynes', equipo: 'celtics'},
    {nombre: 'Justin Holiday', equipo: 'bulls'},
    {nombre: 'Pepe Pérez'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
