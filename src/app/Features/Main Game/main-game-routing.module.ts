import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainGameContainerComponent } from './main-game-container/main-game-container.component';

const routes: Routes = [
  {
    path: '', component: MainGameContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainGameRoutingModule { }
