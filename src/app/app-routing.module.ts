import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './Features/Main Menu/main-menu/main-menu.component';
import { PageNotFoundComponent } from './Features/Not Found/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'contact-us',
    loadChildren: () => import('./Features/Contact Us/contact-us.module').then(i => i.ContactUsModule),
  },
  {
    path: 'play-game',
    loadChildren: () => import('./Features/Main Game/main-game.module').then(i => i.MainGameModule),
  },
  {
    path: 'leaderboards',
    loadChildren: () => import('./Features/Leaderboards/leaderboards.module').then(i => i.LeaderboardsModule),
  },
  {
    path: 'main-menu',
    component: MainMenuComponent,
    loadChildren: () => import('./Features/Main Menu/main-menu.module').then(i => i.MainMenuModule),
  },
  {
    path: 'options',
    loadChildren: () => import('./Features/Options/options.module').then(i => i.OptionsModule),
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
    loadChildren: () => import('./Features/Not Found/not-found.module').then(i => i.NotFoundModule),
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./Features/Tutorial/tutorial.module').then(i => i.TutorialModule),
  },
  {
    path: '',
    redirectTo: 'main-menu',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
