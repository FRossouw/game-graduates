import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameboyComponent } from './Components/gameboy/gameboy.component';

@NgModule({
  declarations: [
    GameboyComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GameboyComponent
  ]
})
export class SharedModule { }
