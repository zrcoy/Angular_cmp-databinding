import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements = [
    { type: "server", name: "test", content: "This is a test!" },
  ];

  onServerCreated(eventData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: eventData.serverName,
      content: eventData.serverContent,
    });
  }

  onBlueprintCreated(eventData: { bpName: string; bpContent: string }) {
    this.serverElements.push({
      type: "blueprint",
      name: eventData.bpName,
      content: eventData.bpContent,
    });
  }
}
