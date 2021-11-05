import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from './Shared/shared.module';

import * as PreferenceStore from './State/preferences/preferences.reducer';
import * as PreferenceEffects from './State/preferences/preferences.effects';

import * as MenuStore from './State/menu/menu.reducer';
import * as MenuEffects from './State/menu/menu.effects';

import * as ControllerStore from './State/controller/controller.reducer';
import * as ControllerEffects from './State/controller/controller.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(PreferenceStore.preferencesFeatureKey, PreferenceStore.reducer),
    StoreModule.forFeature(MenuStore.menuFeatureKey, MenuStore.reducer),
    StoreModule.forFeature(ControllerStore.controllerFeatureKey, ControllerStore.reducer),
    EffectsModule.forRoot([PreferenceEffects.PreferencesEffects, MenuEffects.MenuEffects, ControllerEffects.ControllerEffects]),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
