import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonNavigateComponent } from './button-navigate/button-navigate.component';
import { HeaderComponent } from './header/header.component';
import { MenuWordPuzzleComponent } from './menu-word-puzzle/menu-word-puzzle.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';

@NgModule({
  declarations: [
    ButtonNavigateComponent,
    MenuWordPuzzleComponent,
    HeaderComponent,
    DropdownMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonNavigateComponent,
    MenuWordPuzzleComponent,
    DropdownMenuComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
