import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderboardsRoutingModule } from './leaderboards-routing.module';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';


@NgModule({
  declarations: [
    LeaderboardComponent
  ],
  imports: [
    CommonModule,
    LeaderboardsRoutingModule
  ]
})
export class LeaderboardsModule { }
