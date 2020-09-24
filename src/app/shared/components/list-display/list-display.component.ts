import { Component, Input, OnInit } from "@angular/core";
import { ListDisplayMode } from "../../enum/list-display-mode.enum";

@Component({
  selector: "app-list-display",
  templateUrl: "./list-display.component.html",
  styleUrls: ["./list-display.component.scss"],
})
export class ListDisplayComponent implements OnInit {
  @Input() displayMode: ListDisplayMode = ListDisplayMode.FLEX;
  constructor() {}

  ngOnInit() {}
}
