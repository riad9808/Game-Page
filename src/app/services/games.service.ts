import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
// import {Game} from "../models/Game.model";

@Injectable({
  providedIn: 'root'
})
export class GamesService {



  public url: string = environment.url ;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  };

  constructor(private _http: HttpClient) { }

  getGames(): Observable<any> {

    return this._http.get<any>('http://stage.whgstage.com/front-end-test/games.php', this.httpOptions)

  }
}
