import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  SimpleChange,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent implements OnInit {
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input("changedElement") name: string;
  @ViewChild("heading", { static: true }) heading: ElementRef;
  @ContentChild("contentParagraph", { static: true })
  contentParagraph: ElementRef;

  constructor() {
    console.log("\nconstructor called");
  }

  ngOnChanges(changes: SimpleChange) {
    console.log("\nngOnChanges called");
    console.log(changes);
  }

  ngOnInit() {
    console.log("\nngOnInit called");
    console.log(
      "content of heading: " + this.heading.nativeElement.textContent
    );
    console.log(
      "Content of the paragraph: " +
        this.contentParagraph.nativeElement.textContent
    );
  }

  ngDoCheck() {
    console.log("\nngDoCheck called!");
  }

  ngAfterContentInit() {
    console.log("\nngAfterContentInit called!");
    console.log(
      "Content of the paragraph: " +
        this.contentParagraph.nativeElement.textContent
    );
  }

  ngAfterViewInit() {
    console.log("\nngAfterViewInit called");
  }

  ngAfterViewChecked() {
    console.log("\nngAfterViewChecked called");
  }
}
