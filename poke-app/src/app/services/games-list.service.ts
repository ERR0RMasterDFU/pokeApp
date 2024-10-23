import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GamesListResponse } from '../models/games.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GamesListService {

  constructor(private http: HttpClient) {}

  getGamesList(): Observable<GamesListResponse> {
    return this.http.get<GamesListResponse>('https://pokeapi.co/api/v2/version-group'); 
    // Para juegos por separado: https://pokeapi.co/api/v2/version
  }
}
