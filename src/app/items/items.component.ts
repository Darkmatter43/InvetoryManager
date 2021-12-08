import { Component, OnInit } from '@angular/core';
import {Item} from '../item'
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  selectedItem?:Item;
  onSelect(item:Item):void {
    this.selectedItem = item;
  }

  getItems():void{
    this.itemService.getItems().subscribe(items => this.items=items);
  }

  items:Item[]=[];
  
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe((items)=>(this.items=items));
  }

  deleteItem(item:Item){
    this.itemService.deleteItem(item).subscribe(()=>(this.items = this.items.filter(i=>i._id !== item._id)));
  }

  editItem(item:Item){
    this.itemService.updateItem(item).subscribe((item)=>item=item)
  }

}
