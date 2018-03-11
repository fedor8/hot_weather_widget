import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ResortListComponent } from './components/resort-list/resort-list.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { ResortSmallCardComponent } from './components/resort-small-card/resort-small-card.component';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import { ResortCardComponent } from './components/resort-card/resort-card.component';
import {ResortsService} from './services/resorts.service';
import { ResortFilterPipe } from './pipes/resort-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ResortListComponent,
    WeatherComponent,
    SocialMediaComponent,
    ResortSmallCardComponent,
    CategoryMenuComponent,
    ResortCardComponent,
    ResortFilterPipe
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
