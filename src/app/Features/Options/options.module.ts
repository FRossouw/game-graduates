import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionsRoutingModule } from './options-routing.module';
import { OptionsComponent } from './options/options.component';
import { InputBindingComponent } from './input-binding/input-binding.component';


@NgModule({
  declarations: [
    OptionsComponent,
    InputBindingComponent
  ],
  imports: [
    CommonModule,
    OptionsRoutingModule
  ]
})
export class OptionsModule { }
