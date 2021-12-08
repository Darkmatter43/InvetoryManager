import { Injectable } from '@angular/core';
import {Item} from "./item";
import {Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';



const httpOptions={
  headers:new HttpHeaders({'Content-Type':"application/json"})
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemUrl= 'https://desolate-headland-74868.herokuapp.com/inventory'

  getItems():Observable<Item[]>{
    return this.http.get<Item[]>(this.itemUrl);
  }

  deleteItem(item:Item):Observable<Item>{
    const url = `${this.itemUrl}/${item._id}`
    return this.http.delete<Item>(url)
  }

  addItem(item:Item):Observable<Item>{
    return this.http.post<Item>(this.itemUrl,item)
  }

  constructor(private http:HttpClient) { }
}
