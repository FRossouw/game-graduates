import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainGameRoutingModule } from './main-game-routing.module';
import { MainGameContainerComponent } from './main-game-container/main-game-container.component';
import { MainGameCanvasThreeComponent } from './main-game-canvas-three/main-game-canvas-three.component';


@NgModule({
  declarations: [
    MainGameContainerComponent,
    MainGameCanvasThreeComponent
  ],
  imports: [
    CommonModule,
    MainGameRoutingModule
  ]
})
export class MainGameModule { }
