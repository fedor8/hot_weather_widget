import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ResortListComponent } from './resort-list/resort-list.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ResortSmallCardComponent } from './resort-small-card/resort-small-card.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { ResortCardComponent } from './resort-card/resort-card.component';
import {ResortsService} from './services/resorts.service';

@NgModule({
  declarations: [
    AppComponent,
    ResortListComponent,
    WeatherComponent,
    SocialMediaComponent,
    ResortSmallCardComponent,
    CategoryMenuComponent,
    ResortCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [ResortsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
