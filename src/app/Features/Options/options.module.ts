import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionsRoutingModule } from './options-routing.module';
import { OptionsComponent } from './options/options.component';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { CustomSpeedComponent } from './custom-speed/custom-speed.component';
import { SharedModule } from 'src/app/Shared/shared.module';


@NgModule({
  declarations: [
    OptionsComponent,
    InputBindingComponent,
    CustomSpeedComponent
  ],
  imports: [
    CommonModule,
    OptionsRoutingModule,
    SharedModule
  ]
})
export class OptionsModule { }
