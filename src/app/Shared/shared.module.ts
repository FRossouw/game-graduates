import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonNavigateComponent } from './button-navigate/button-navigate.component';
import { HeaderComponent } from './header/header.component';
import { MenuWordPuzzleComponent } from './menu-word-puzzle/menu-word-puzzle.component';

@NgModule({
  declarations: [
    ButtonNavigateComponent,
    MenuWordPuzzleComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonNavigateComponent,
    MenuWordPuzzleComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
