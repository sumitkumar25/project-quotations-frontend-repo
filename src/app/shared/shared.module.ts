import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListDisplayComponent } from "./components/list-display/list-display.component";

@NgModule({
  declarations: [ListDisplayComponent],
  imports: [CommonModule],
  exports: [ListDisplayComponent],
})
export class SharedModule {}
