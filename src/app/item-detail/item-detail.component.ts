import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Item} from "../item"
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  items:Item[]=[];

  @Input() item?:Item;
  @Output() onDeleteItem:EventEmitter<Item>=new EventEmitter()
  @Output() onEditItem:EventEmitter<Item>=new EventEmitter()
  
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
  }

  onDelete(item:Item){
    this.onDeleteItem.emit(item)
  }
  onEdit(item:Item){
    const updatedItem = {
      _id:null,
      name:this.item?.name,
      description:this.item?.description,
      qty:this.item?.qty
    }
    this.onEditItem.emit(item)
  }
  // deleteItem(item:Item){
  //   this.itemService.deleteItem(item).subscribe(()=>this.items=this.items.filter(p=>p._id !==item._id))
  // }
}
