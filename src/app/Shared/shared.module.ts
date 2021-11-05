import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameboyComponent } from './Components/gameboy/gameboy.component';
import { MenuGeneratorComponent } from './Components/menu-generator/menu-generator.component';

@NgModule({
  declarations: [
    GameboyComponent,
    MenuGeneratorComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GameboyComponent,
    MenuGeneratorComponent
  ]
})
export class SharedModule { }
