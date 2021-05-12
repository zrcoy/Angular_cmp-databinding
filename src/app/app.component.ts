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

  isEven: boolean = true;
  count: number;

  onFireInterval(count: number) {
    console.log(count);
    this.isEven = count % 2 === 0 ? true : false;
    this.count = count;
  }

  onServerCreated(eventData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: eventData.serverName,
      content: eventData.serverContent,
    });
  }

  onBlueprintCreated(eventData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "blueprint",
      name: eventData.serverName,
      content: eventData.serverContent,
    });
  }

  onChangeFirst() {
    if (this.serverElements[0]) {
      this.serverElements[0].name = "changed!";
    }
  }

  OnDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
