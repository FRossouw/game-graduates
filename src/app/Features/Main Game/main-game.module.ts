import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainGameRoutingModule } from './main-game-routing.module';
import { MainGameContainerComponent } from './main-game-container/main-game-container.component';
import { MainGameCanvasComponent } from './main-game-canvas/main-game-canvas.component';
import { SharedModule } from 'src/app/Shared/shared.module';


@NgModule({
  declarations: [
    MainGameContainerComponent,
    MainGameCanvasComponent
  ],
  imports: [
    CommonModule,
    MainGameRoutingModule,
    SharedModule
  ]
})
export class MainGameModule { }
