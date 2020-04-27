import {Component, Input, ChangeDetectionStrategy} from '@angular/core'
import {DominoService} from "../core/domino.service"

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
  @Input() height: number;
  @Input() width: number;

  constructor(private dominoService: DominoService) {

  }
}