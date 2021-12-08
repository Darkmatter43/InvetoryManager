import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Item} from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Output() onAddItem:EventEmitter<Item>=new EventEmitter();


  items:Item[]=[];

  'name':string;
  'description':string;
  'qty':number;

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe((items)=>(this.items=items));
  }

  onSubmit(){
    if(!this.name){
      alert('Please create an item for inventory.')
    }

    const newItem={
      _id:null,
      name:this.name,
      description:this.description,
      qty:this.qty,
    }

    this.onAddItem.emit(newItem)

    this.name='';
    this.description='';
    this.qty=0;

    this.addItem(newItem)
  }

  addItem(item:Item){
    this.itemService.addItem(item).subscribe((item)=>(this.items.push(item)))
  }

  getItems():void{
    this.itemService.getItems().subscribe(items=>this.items=items)
  }
}
