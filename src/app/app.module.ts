import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroComponent } from './components/landing-page/hero/hero.component';
import { ServicesComponent } from './components/landing-page/services/services.component';
import { AdsCenterComponent } from './components/landing-page/ads-center/ads-center.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ElectronicsServicesComponent } from './components/landing-page/electronics-services/electronics-services.component';
import { RoomServicesComponent } from './components/landing-page/room-services/room-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    HeroComponent,
    ServicesComponent,
    AdsCenterComponent,
    ElectronicsServicesComponent,
    RoomServicesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
