import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: "Turca", type: "Dog", age: 4 },
    { name: "Tom", type: "Cat", age: 10 },
    { name: "Frida", type: "Dog", age: 5 },
    { name: "Bob", type: "Horse", age: 1 },
  ];

  animal: Animal = {
    name: "teste",
    type: "Alguma coisa",
    age: 10,
  };

  animalDetails = '';

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * foi usado o retorno void pois foi seguido o padrão do typescript devido a não possuir retorno
   * esse método faz apenas uma alteração no DOM
   * @param animal
   */
  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

}
