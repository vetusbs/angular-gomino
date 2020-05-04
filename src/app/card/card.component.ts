import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Card, Movement } from "../core/domino.model";

const faces = ["", "one", "two", "three", "four", "five", "six"];

@Component({
  selector: "card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() public card: Card;
  @Input() public isBoard: boolean = false;
  @Output() movement = new EventEmitter<Card>();

  constructor() {}

  ngOnInit() {}

  get getClassLeft(): String {
    return faces[this.card.left];
  }

  get getClassRight(): String {
    return faces[this.card.right];
  }

  get getClass(): String {
    var result = "";
    if (this.isBoard == false || this.card.left == this.card.right) {
      result += "";
    } else if (this.card.reverse == true) {
      result += " rot90";
    } else {
      result += " rot270";
    }
    return result;
  }

  play(isLeft: boolean) {
    this.movement.emit(new Movement(this.card, isLeft));
  }

  ngAfterViewChecked() {
    //console.trace("CardComponent", this.card);
  }
}
