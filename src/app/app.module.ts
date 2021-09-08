import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import * as MainStore from './Store/index';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(MainStore.reducers.GameReducer.gameFeatureKey, MainStore.reducers.GameReducer.reducer),
    EffectsModule.forRoot([MainStore.effects.GameEffects.GameEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
