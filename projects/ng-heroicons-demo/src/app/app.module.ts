import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconsModule, ICONS_OUTLINE, ICONS_SOLID, ICONS_MINI } from '@amithvns/ng-heroicons';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IconsModule.withIcons({
      ...ICONS_OUTLINE,
      ...ICONS_SOLID,
      ...ICONS_MINI
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
