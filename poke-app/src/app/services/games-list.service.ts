import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesListService {

  constructor(private http: HttpClient) {}

  /*getGamesList(): Observable<GamesListResponse> {
    return this.http.get<GamesListResponse>('http://swapi.dev/api/people');
  }*/
}
