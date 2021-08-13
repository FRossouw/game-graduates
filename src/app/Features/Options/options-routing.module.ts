import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { OptionsComponent } from './options/options.component';

const routes: Routes = [
  {
    path: 'key-bindings', component: InputBindingComponent
  },
  {
    path: '', component: OptionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsRoutingModule { }
