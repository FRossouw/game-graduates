import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonNavigateComponent } from './button-navigate/button-navigate.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    ButtonNavigateComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonNavigateComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
