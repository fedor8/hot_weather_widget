import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { ResortListComponent } from './components/resort-list/resort-list.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { ResortSmallCardComponent } from './components/resort-small-card/resort-small-card.component';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import { ResortCardComponent } from './components/resort-card/resort-card.component';
import {ResortsService} from './services/resorts.service';
import { ResortFilterPipe } from './pipes/resort-filter.pipe';
import {HttpClient, HttpClientModule} from '@angular/common/http';

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
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ResortsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

