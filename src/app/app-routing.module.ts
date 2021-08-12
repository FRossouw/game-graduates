import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'main-game',
    loadChildren: () => import('./Features/Main Game/main-game.module').then(i => i.MainGameModule),
  },
  {
    path: '',
    redirectTo: 'main-game',
    pathMatch: 'full'
  },
  {
    // path: '**', component: PageNotFoundComponent
    path: '**',
    redirectTo: 'main-game',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
