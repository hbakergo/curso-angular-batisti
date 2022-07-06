import { ListService } from 'src/app/services/list.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  animal?: Animal; //por usar o ?, para não dar erro foi usado no template o *ngIf ao lidar com o animal

  constructor(
    private listService: ListService,
    private route: ActivatedRoute
    ) {
      this.getAnimal();
     }

  ngOnInit(): void {
  }

  getAnimal(){
    //vem string pelo get, e o Number() converte e passa a tratar como number
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listService.getItem(id).subscribe(
      (animal) => (this.animal = animal)
    );
  }

}
