import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Player, Domino } from "../core/domino.model";
import { Card, Movement } from "../core/domino.model";
import { DominoService } from "../core/domino.service";

@Component({
  selector: 'upside-card',
  templateUrl: './upside-card.component.html',
  styleUrls: ['./upside-card.component.css']
})
export class UpsideCardComponent implements OnInit {
  @Input() public gameId: String;
  @Output() onGameUpdate = new EventEmitter<Domino>();

  constructor(private dominoService: DominoService) {}

  ngOnInit() {
    //console.info("Game ID");
    //console.info(this.gameId);
  }

  ngAfterViewChecked() {
//    console.info("llalala players");
//    console.info(this.domino);
  }

  pick() {
    console.info("Player %s has picked", this.gameId);
    this.dominoService.pick(this.gameId).subscribe(
      data => {
        // Success
        this.onGameUpdate.emit(data)
      },
      error => {
        this.onGameUpdate.emit(data)
        console.error(error.status);
      }
    );
  }
}