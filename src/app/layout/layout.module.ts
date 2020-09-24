import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    AuthenticationModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class LayoutModule { }
