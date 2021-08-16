import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial/tutorial.component';
import { SharedModule } from 'src/app/Shared/shared.module';


@NgModule({
  declarations: [
    TutorialComponent
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule,
    SharedModule
  ]
})
export class TutorialModule { }
