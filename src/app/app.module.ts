import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainGameContainerComponent } from './Features/Main Game/main-game-container/main-game-container.component';
import { MainGameCanvasComponent } from './Features/Main Game/main-game-canvas/main-game-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    MainGameContainerComponent,
    MainGameCanvasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
