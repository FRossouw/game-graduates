import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderboardsRoutingModule } from './leaderboards-routing.module';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { SharedModule } from 'src/app/Shared/shared.module';


@NgModule({
  declarations: [
    LeaderboardComponent
  ],
  imports: [
    CommonModule,
    LeaderboardsRoutingModule,
    SharedModule
  ]
})
export class LeaderboardsModule { }
