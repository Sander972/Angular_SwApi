import { Component, Input, OnInit } from '@angular/core';
import {IFilms} from '../models/StarWarsModels';

@Component({
  selector: 'app-film-list-item',
  templateUrl: './film-list-item.component.html',
  styleUrls: ['./film-list-item.component.css']
})
export class FilmListItemComponent implements OnInit {

  @Input()
  film: IFilms;

  constructor() { }

  ngOnInit() {
  }
}
