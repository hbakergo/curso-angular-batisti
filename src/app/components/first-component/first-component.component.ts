import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name:string = "Hugo";
  age: number = 30;
  job = "Programador";
  hobbies = ["Ler", "Estudar", "Kung Fu"];
  car = {
    name: 'Hilux',
    year: 2020,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
