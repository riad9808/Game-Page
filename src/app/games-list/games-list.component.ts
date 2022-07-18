import { Component, OnInit } from '@angular/core';
import {GamesService} from "../services/games.service";
import {Observable, of} from "rxjs";
import gamesData from "../../data/games.json";

export interface Game {
  name : string;
  id : string;
  image : string;
  categories : string[]
}



@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})


export class GamesListComponent implements OnInit {
  Games  : Observable<any[]>;
  constructor( private game_service : GamesService) { }

  ngOnInit(): void {
    //this.Games = gamesData
    // this.game_service.getGames();
    this.Games  = this.game_service.getGames();
    this.Games  = of(gamesData);

  }

}
