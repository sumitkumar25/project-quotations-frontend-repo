import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasPrimerComponent } from './components/canvas-primer/canvas-primer.component';



@NgModule({
  declarations: [CanvasPrimerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CanvasPrimerComponent
  ]
})
export class VisualizationModule { }
