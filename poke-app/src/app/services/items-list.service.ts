import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemsListResponse } from '../models/items.iterfaces';
import { Observable } from 'rxjs';
import { ItemsDetailResponse } from '../models/items-details-response.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ItemsListService {

  constructor(private http: HttpClient) {}

  getItemsList(): Observable<ItemsListResponse> {
    return this.http.get<ItemsListResponse>('https://pokeapi.co/api/v2/item'); 
  }

  getItem(id: number): Observable<ItemsDetailResponse> {
    return this.http.get<ItemsDetailResponse>(`https://pokeapi.co/api/v2/item/${id}/`);
  }
}
