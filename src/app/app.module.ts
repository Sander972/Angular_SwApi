import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmListItemComponent } from './film-list-item/film-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
