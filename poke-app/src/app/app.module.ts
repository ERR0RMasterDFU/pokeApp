import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    GamesListComponent,
    NavbarComponent,
    ItemsListComponent,
    ItemDetailComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
