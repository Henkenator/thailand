import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { StartComponent } from './components/start/start.component';
import { BookingComponent } from './components/booking/booking.component';
import { ContactComponent } from './components/contact/contact.component';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AreaComponent } from './components/area/area.component';
import { HouseComponent } from './components/house/house.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import {ReactiveFormsModule} from '@angular/forms';

export const appRoutes: Routes = [
  {path: '', component: StartComponent},
  {path: 'huset', component: HouseComponent},
  {path: 'omradet', component: AreaComponent},
  {path: 'aktiviteter', component: ActivitiesComponent},
  {path: 'galleri', component: GalleryComponent},
  {path: 'bokning', component: BookingComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    StartComponent,
    BookingComponent,
    ContactComponent,
    PageNotFoundComponent,
    AreaComponent,
    HouseComponent,
    ActivitiesComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
