import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import * as uuid from "uuid";
import { Router } from '@angular/router';

import { Domino, User } from "../core/domino.model";
import { DominoService } from "../core/domino.service";
import { AuthenticationService } from "../core/authentication.service";
import { WebsocketService } from "../core/websocket.server";

@Component({
  selector: "domino",
  templateUrl: "./domino.component.html",
  styleUrls: ["./domino.component.css"]
})
export class DominoComponent implements OnInit {
  domino: Domino;
  checkoutForm;

  // (2) Inject
  constructor(
    private router: Router,
    private dominoService: DominoService,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private socketService: WebsocketService
  ) {
    this.domino = null;

    this.checkoutForm = this.formBuilder.group({
      gameId: ""
    });
  }

  onSubmit(formData) {
    var user: User = this.authenticationService.currentUserValue;
    console.info(formData.gameId)
    console.info(user.email)
    this.joinGame(formData.gameId, user.email, user.email)
    this.checkoutForm.reset();
  }

  private joinGame(gameId: string, userId: string, userName: string) {
    this.dominoService.addUser(gameId, userId, userName).subscribe(
      data => {
        // Success
        this.domino = data;
      },
      error => {
        console.error(error);
      }
    );

    this.socketService.connect(gameId,userId).subscribe(
      data => {
        console.log(data)
        this.dominoService.getGame(this.domino.id).subscribe(
          data => {
            // Success
            this.domino = data;
          },
          error => {
            console.error(error);
          }
        );
      },
      error => {

      }
    )
  }

  login(formData) {
    console.info("login... ");

    const userId = uuid.v4();
    const userName = formData.userName;

    this.joinGame(userId, userName, this.domino.id)
  }

  shuffle() {
    console.info("shuffle... ");

    this.dominoService.shuffle(this.domino.id).subscribe(
      data => {
        // Success
        this.domino = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  ngAfterViewChecked() { }

  ngOnInit() {

  }

  onGameUpdate(domino: Domino) {
    this.domino = domino;
  }

  pick() {
    console.info("Player %s has picked", localStorage.getItem("userId"));
    this.dominoService.pick(this.domino.id, localStorage.getItem("userId")).subscribe(
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
