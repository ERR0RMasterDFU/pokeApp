import { Component } from '@angular/core';
import { ItemsDetailResponse } from '../../models/items-details-response.interfaces';
import { ActivatedRoute } from '@angular/router';
import { ItemsListService } from '../../services/items-list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {
  itemId: string | null = '';
  item: ItemsDetailResponse | undefined;

  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsListService
  ) { }
  
  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    
    this.itemsService.getItem(parseInt(this.itemId!)).subscribe(response => {
      this.item = response;
    })
  }
}
