import { Component } from '@angular/core';
import { FlavorTextEntry, ItemsDetailResponse, Name } from '../../models/items-details-response.interfaces';
import { ActivatedRoute } from '@angular/router';
import { ItemsListService } from '../../services/items-list.service';
import { Item, ItemsListResponse } from '../../models/items.iterfaces';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {
  itemId: number | null = 0;
  item: ItemsDetailResponse | undefined;

  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsListService
  ) { }
  
  ngOnInit(): void {

    let ruta = this.route.toString();
    this.itemId = parseInt(ruta.split('/')[2]);

    this.itemsService.getItem(this.itemId).subscribe(response => {
      this.item = response;
    })
  }

  getTextEsFlavor(flavor: Array<FlavorTextEntry>) {
    let texto = flavor.find(entry => entry.language.name === 'es')!.text;
    return texto;
  }

  getTextEsNames(names: Array<Name>) {
    let texto = names.find(entry => entry.language.name === 'es')!.name;
    return texto;
  }

}
