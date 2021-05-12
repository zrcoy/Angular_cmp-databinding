import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ViewChild,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output("serverCreated") serverCreatedEvent = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("bpCreated") bpCreatedEvent = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = "";
  //newServerContent = "";
  @ViewChild("serverContentInput", { static: true })
  serverContentInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAddServer(inputName: HTMLInputElement) {
    this.serverCreatedEvent.emit({
      serverName: inputName.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(inputName: HTMLInputElement) {
    this.bpCreatedEvent.emit({
      serverName: inputName.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
