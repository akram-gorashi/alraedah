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
import { PartnersComponent } from './components/landing-page/partners/partners.component';
import { SupportBusinessComponent } from './components/landing-page/support-business/support-business.component';
import { AgmCoreModule } from '@agm/core';
import { ChambrServicesComponent } from './components/landing-page/chambr-services/chambr-services.component';
import { CalenderComponent } from './components/landing-page/calender/calender.component';

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
    RoomServicesComponent,
    PartnersComponent,
    SupportBusinessComponent,
    ChambrServicesComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBf-nmwJZNmuKybNLLU0JHEabA-k62inRY'
    }),
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
