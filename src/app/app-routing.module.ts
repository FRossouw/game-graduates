import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'leaderboards',
    loadChildren: () => import('./Features/Leaderboards/leaderboards.module').then(i => i.LeaderboardsModule),
  },
  {
    path: 'main-game',
    loadChildren: () => import('./Features/Main Game/main-game.module').then(i => i.MainGameModule),
  },
  {
    path: 'main-menu',
    loadChildren: () => import('./Features/Main Menu/main-menu.module').then(i => i.MainMenuModule),
  },
  {
    path: 'options',
    loadChildren: () => import('./Features/Options/options.module').then(i => i.OptionsModule),
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./Features/Not Found/not-found.module').then(i => i.NotFoundModule),
  },
  {
    path: '',
    redirectTo: 'main-menu',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () => import('./Features/Not Found/not-found.module').then(i => i.NotFoundModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
