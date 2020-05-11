import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Player, Domino } from "../core/domino.model";
import { Card, Movement } from "../core/domino.model";
import { DominoService } from "../core/domino.service";
import { AuthenticationService } from "../core/authentication.service";

@Component({
  selector: "player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"]
})
export class PlayerComponent implements OnInit {
  @Input() public player: Player;
  @Input() public gameId: String;
  @Output() onGameUpdate = new EventEmitter<Domino>();

  constructor(private dominoService: DominoService, public authenticatorService: AuthenticationService) {}

  ngOnInit() {
    //console.info("Game ID");
    //console.info(this.gameId);
  }

  ngAfterViewChecked() {
//    console.info("llalala players");
//    console.info(this.domino);
  }

  get totalPoints() : number {
    return this.player.points.reduce((a, b) => a + b, 0)
  }

  onPlay(movement: Movement) {
    console.info("Player %s has played", this.gameId);
    this.dominoService.doMovement(this.gameId, "", movement).subscribe(
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
