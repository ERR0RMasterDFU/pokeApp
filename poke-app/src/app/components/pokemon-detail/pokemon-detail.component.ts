import { Component} from '@angular/core';
import { PokemonDetailResponse} from '../../models/pokemon-details-response.interfaces';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {
  pokemonName: string | null = '';
  pokemon: PokemonDetailResponse | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }
  
  ngOnInit(): void {

    this.pokemonName = this.route.snapshot.paramMap.get('name')

    this.pokemonService.getPokemon(this.pokemonName!).subscribe(response => {
      this.pokemon = response;
    })
  }

  getPesoYAlturaCorrectos(peso: number) {
    return peso/10;
  }

  getBgCardColor(tipoUno: string): string{
    interface Colours {
        [index: string]: string;
    }

    let coloresTipo = {
        "normal": "rgb(168, 168, 120)",
        "fighting": "rgb(193, 49, 48)",
        "flying": "rgb(135, 206, 250)",
        "ground": "rgb(226, 191, 101)",
        "poison": "rgb(163, 62, 161)",
        "rock": "rgb(184, 160, 56)",
        "bug": "rgb(168, 184, 32)",
        "ghost": "rgb(112, 88, 152)",
        "steel": "rgb(183, 183, 206)",
        "fire": "rgb(255, 69, 0)",
        "water": "rgb(0, 112, 221)",
        "grass": "rgb(120, 200, 80)",
        "electric": "rgb(255, 255, 0)",
        "physic": "rgb(255, 85, 155)",
        "ice": "rgb(150, 217, 214)",
        "dragon": "rgb(111, 53, 252)",
        "dark": "rgb(112, 88, 72)",
        "fairy": "rgb(255, 192, 203)"
    } as Colours

    return `background-color: ${coloresTipo[tipoUno]}`
  }

};
