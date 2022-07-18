import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../games-list.component";

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  @Input() game? : Game
  constructor() { }

  ngOnInit(): void {
  }

}
