import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../core/domino.model';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  
  @Input() public player: Player;

  constructor() { }

  ngOnInit() {

  }

   ngAfterViewChecked() {
    console.info("llalala players");
    console.info(this.player.cards);
  }

}