import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import * as uuid from "uuid";

import { Domino } from "../core/domino.model";
import { DominoService } from "../core/domino.service";

@Component({
  selector: "domino",
  templateUrl: "./domino.component.html",
  styleUrls: ["./domino.component.css"]
})
export class DominoComponent implements OnInit {
  domino: Domino;
  public userName: string;
  checkoutForm;
  loginForm;

  // (2) Inject
  constructor(
    private dominoService: DominoService,
    private formBuilder: FormBuilder
  ) {
    this.domino = null;

    this.checkoutForm = this.formBuilder.group({
      gameId: ""
    });

    this.loginForm = this.formBuilder.group({
      userName: ""
    });
  }

  onSubmit(formData) {
    // Process checkout data here

    this.dominoService.getGame(formData.gameId).subscribe(
      data => {
        // Success
        this.domino = data;
      },
      error => {
        console.error(error);
      }
    );

    this.checkoutForm.reset();
  }

  login(formData) {
    console.info("login... ");

    const userId = uuid.v4();
    const userName = formData.userName;

    this.dominoService.addUser(this.domino.id, userId, userName).subscribe(
      data => {
        // Success
        this.userName = userName;
        localStorage.setItem("userId", userId);
        localStorage.setItem("userName", userName);

        console.info("userId " + userId);

        this.domino = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  ngAfterViewChecked() {}

  ngOnInit() {}

  onGameUpdate(domino: Domino) {
    this.domino = domino;
  }

  pick() {
    console.info("Player %s has picked", localStorage.getItem("userId"));
    this.dominoService.pick(this.domino.id,  localStorage.getItem("userId")).subscribe(
      data => {
        // Success
        this.onGameUpdate(data)
      },
      error => {
        console.error(error.status);
      }
    );
  }
}
