import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainMenuRoutingModule } from './main-menu-routing.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SharedModule } from 'src/app/Shared/shared.module';


@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    MainMenuRoutingModule,
    SharedModule
  ]
})
export class MainMenuModule { }
