import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { ItemsListComponent } from './components/items-list/items-list.component';

const routes: Routes = [
  {path:'pokemon', component: PokemonListComponent},
  {path:'games', component: GamesListComponent},
  {path:'items', component: ItemsListComponent},
  {path: '', redirectTo: 'pokemon', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
