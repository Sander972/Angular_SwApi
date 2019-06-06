import {Component, OnInit} from '@angular/core';
import {IFilms, IStarWarsResponse} from '../models/StarWarsModels';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  list: IFilms[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<IStarWarsResponse>("https://swapi.co/api/films/")
      .subscribe(data =>{
          this.list=data.results;
        },
        error =>{
          alert("é avvenuto un errore!");
        })
  }
}
