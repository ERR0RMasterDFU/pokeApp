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

  getItemId(url: string) {
    let id = url.split('/')[6];
    return parseInt(id); 
  }

  getNombreEsp(name : string) {

    switch (name) {
        case "master-ball":
            return 'master ball';
            break;
        case "ultra-ball":
            return 'ultra ball';
            break;
        case "great-ball":
            return 'super ball';
            break;
        case "safari-ball":
          return 'safari ball';
          break;
        case "net-ball":
          return 'malla ball';
          break;
        case "dive-ball":
          return 'buceo ball';
          break;
        case "nest-ball":
          return 'nido ball';
          break;
        case "repeat-ball":
          return 'acopio ball';
          break;
        case "timer-ball":
          return 'turno ball';
          break;
        case "luxury-ball":
          return 'lujo ball';
          break;
        case "premier-ball":
          return 'honor ball';
          break;
        case "dusk-ball":
          return 'ocaso ball';
          break;
        case "heal-ball":
          return 'sana ball';
          break;
        case "quick-ball":
          return 'veloz ball';
          break;
        case "cherish-ball":
          return 'gloria ball';
          break;
        case "potion":
          return 'poción';
          break;
        case "antidote":
          return 'antídoto';
          break;
        case "burn-heal":
          return 'antiquemar';
          break;
        case "ice-heal":
          return 'anthielo';
          break;
          
        default:
          return 'poké ball';
          break;
    }
  }
}
