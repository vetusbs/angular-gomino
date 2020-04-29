import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Card } from "../core/domino.model";

const faces = ["", "one", "two", "three", "four", "five", "six"];

@Component({
  selector: "card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() public card: Card;
  @Output() movement = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  get getClassLeft(): String {
    return faces[this.card.left];
  }

  get getClassRight(): String {
    return faces[this.card.right];
  }

  play() {
    this.movement.emit(this.card);
  }

  ngAfterViewChecked() {
    //console.trace("CardComponent", this.card);
  }
}
