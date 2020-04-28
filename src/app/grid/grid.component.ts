import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { DominoService } from "../core/domino.service";
import { Player } from "../core/domino.model";

@Component({
  selector: "grid",
  templateUrl: "./grid.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
  @Input() height: number;
  @Input() width: number;
  @Input() players: Player[];

  constructor(private dominoService: DominoService) {}

  ngOnInit() {
    console.info("llalala players");
    console.info(this.players);
  }
}
