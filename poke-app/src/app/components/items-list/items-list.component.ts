import { Component, OnInit } from '@angular/core';
import { ItemsList } from '../../models/items.iterfaces';
import { ItemsListService } from '../../services/items-list.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent implements OnInit {

  listadoItems: ItemsList[] = [];
  imagen = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/';

  constructor(private itemService: ItemsListService) { }
  
  ngOnInit(): void {
    this.itemService.getItemsList().subscribe((response) => {
      this.listadoItems = response.results;
    });
  }

  getImagen(name: string) {
    return this.imagen.concat(name + '.png');
  }
  
}
