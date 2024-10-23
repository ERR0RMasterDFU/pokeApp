import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.interfaces';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{
  
  pokemonList: Pokemon[] = [];
  imagen = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private pokemonService: PokemonService) { }
  
  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe((response) => {
      this.pokemonList = response.results;
    });
  }

  getImagen(url: string) {
    let id = url.slice(34, -1);
    return this.imagen.concat(id + '.png');
  }


}
