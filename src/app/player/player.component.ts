import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Player, Domino } from "../core/domino.model";
import { Card } from "../core/domino.model";
import { DominoService } from "../core/domino.service";

@Component({
  selector: "player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"]
})
export class PlayerComponent implements OnInit {
  @Input() public player: Player;
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

  onPlay(card: Card) {
    console.info("Player %s has played", this.gameId);
    this.dominoService.doMovement(this.gameId, "", card).subscribe(
      data => {
        // Success
        this.onGameUpdate.emit(data)
      },
      error => {
        console.error(error.status);
      }
    );
  }
}
