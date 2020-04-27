import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { Domino } from "../core/domino.model";
import { DominoService } from "../core/domino.service";

@Component({
  selector: "app-domino",
  templateUrl: "./domino.component.html",
  styleUrls: ["./domino.component.css"]
})
export class DominoComponent implements OnInit {
  domino: Domino;
  checkoutForm;

  // (2) Inject
  constructor(
    private dominoService: DominoService,
    private formBuilder: FormBuilder
  ) {
    this.domino = null;

    this.checkoutForm = this.formBuilder.group({
      gameId: ""
    });
  }

  onSubmit(formData) {
    // Process checkout data here

    this.dominoService.getGame(formData.gameId).subscribe(
      data => {
        // Success
        this.domino = new Domino(data.id);
      },
      error => {
        console.error(error);
      }
    );

    this.checkoutForm.reset();
  }

  ngOnInit() {}
}
