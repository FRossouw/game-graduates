import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { MenuWordPuzzleComponent } from './Components/menu-word-puzzle/menu-word-puzzle.component';
import { DropdownMenuComponent } from './Components/dropdown-menu/dropdown-menu.component';
import { ControllerComponent } from './Components/controller/controller.component';

@NgModule({
  declarations: [
    MenuWordPuzzleComponent,
    HeaderComponent,
    DropdownMenuComponent,
    ControllerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MenuWordPuzzleComponent,
    DropdownMenuComponent,
    HeaderComponent,
    ControllerComponent
  ]
})
export class SharedModule { }
