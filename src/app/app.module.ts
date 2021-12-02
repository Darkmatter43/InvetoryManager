import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
