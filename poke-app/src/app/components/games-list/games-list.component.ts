import { Component, OnInit } from '@angular/core';
import { GamesList } from '../../models/games.interfaces';
import { GamesListService } from '../../services/games-list.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.css'
})
export class GamesListComponent implements OnInit {

  listadoJuegos: GamesList [] = [];
  imagen: string = 'https://starwars-visualguide.com/assets/img/characters/'

  constructor(private gamesService: GamesListService){}

  ngOnInit(): void {
    this.gamesService.getGamesList().subscribe(respuesta => {
      this.listadoJuegos = respuesta.results;
    });
  }

  /*getImagen(url: string) {
    let id = url.slice(28, -1);
    return this.imagen.concat(id + '.jpg');
  }*/
}
