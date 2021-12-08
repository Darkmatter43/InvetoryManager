import { Injectable } from '@angular/core';
import {Item} from "./item";
import {ITEMS} from "./mock-items";
import {Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';


const httpOptions={
  headers:new HttpHeaders({'Content-Type':"application/json"})
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  getItems():Observable<Item[]>{
    const items = of(ITEMS);
    return items;
  }

  constructor() { }
}
