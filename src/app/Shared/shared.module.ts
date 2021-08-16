import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonNavigateComponent } from './button-navigate/button-navigate.component';

@NgModule({
  declarations: [
    ButtonNavigateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonNavigateComponent
  ]
})
export class SharedModule { }
