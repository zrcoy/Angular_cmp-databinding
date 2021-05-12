import {
  Component,
  ElementRef,
  OnInit,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  number: number = 0;
  ref;
  @Output() fireIntervalEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onStart() {
    console.log("onStart()");
    this.ref = setInterval(() => {
      this.fireIntervalEvent.emit(this.number);
      this.number++;
    }, 1000);
  }

  onStop() {
    console.log("onStop()");
    clearInterval(this.ref);
  }
}
