import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ResortListComponent } from './resort-list/resort-list.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ResortSmallCardComponent } from './resort-small-card/resort-small-card.component';
import { XComponent } from './x/x.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ResortListComponent,
    WeatherComponent,
    SocialMediaComponent,
    ResortSmallCardComponent,
    XComponent,
    CategoryMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
