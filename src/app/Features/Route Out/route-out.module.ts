import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteOutRoutingModule } from './route-out-routing.module';
import { RouteOutComponent } from './route-out/route-out.component';


@NgModule({
  declarations: [RouteOutComponent],
  imports: [
    CommonModule,
    RouteOutRoutingModule
  ]
})
export class RouteOutModule { }
