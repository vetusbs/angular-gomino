import { Component, OnInit } from '@angular/core';

import { Domino } from "../core/domino.model";
import { DominoService } from "../core/domino.service";

@Component({
  selector: 'app-domino',
  templateUrl: './domino.component.html',
  styleUrls: ['./domino.component.css']
})
export class DominoComponent implements OnInit {
  domino: Domino = new Domino("staring s")

    // (2) Inject
  constructor(private dominoService: DominoService) {
    this.domino = null;
  }


  ngOnInit() {
    
    this.dominoService.list().subscribe(
      (data) => { // Success
        this.domino = new Domino(data.id);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
