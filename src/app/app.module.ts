import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StartComponent } from './components/start/start.component';
import { BookingComponent } from './components/booking/booking.component';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AreaComponent } from './components/area/area.component';
import { HouseComponent } from './components/house/house.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CarouselComponent, CarouselItemDirective, CarouselItemElement} from './components/carousel/carousel.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ImageHolderComponent } from './components/image-holder/image-holder.component';

export const appRoutes: Routes = [
  {path: '', component: StartComponent},
  {path: 'huset', component: HouseComponent},
  {path: 'omradet', component: AreaComponent},
  {path: 'aktiviteter', component: ActivitiesComponent},
  {path: 'bokning', component: BookingComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartComponent,
    BookingComponent,
    PageNotFoundComponent,
    AreaComponent,
    HouseComponent,
    ActivitiesComponent,
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElement,
    ImageHolderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {scrollPositionRestoration: 'enabled'}
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
