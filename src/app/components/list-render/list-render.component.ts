import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animal: Animal = {
    name: "teste",
    type: "Alguma coisa",
    age: 10,
  };

  animalDetails = '';

  constructor(private listService: ListService) {
    this.getAnimals();
   }

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

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }

  //SUBSCRIBE => por causa do observable lá do service no final do método usamos o subscribe,
  //que diz que o evento vai ser concretizado, que seria como se ele estivesse esperando esse evento
  //para realizar alguma coisa e dentro do subscribe eu tenho como fazer alguma coisa com as propriedades
  //do meu componente
  getAnimals():void {
    this.listService.getAll().subscribe(
      (animals) => (this.animals = animals)
    );
  }
}
