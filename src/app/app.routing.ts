import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './gyntek/home/component/home.component';
import { NavbarComponent } from './gyntek/shared/navbar/component/navbar.component';
import { FooterComponent } from './gyntek/shared/footer/component/footer.component';
import { IntroComponent } from './gyntek/home/sections/intro/component/intro.component';
import { WorkComponent } from './gyntek/home/sections/work/component/work.component';
import { TestimonialsComponent } from './gyntek/home/sections/testimonials/component/testimonials.component';
import { ServicesComponent } from './gyntek/home/sections/services/component/services.component';
import { AboutComponent } from './gyntek/home/sections/about/component/about.component';
import { CountersComponent } from './gyntek/home/sections/counters/component/counters.component';
import { ContactComponent } from './gyntek/home/sections/contact/component/contact.component';
import {MoreDevComponent} from './gyntek/home/sections/intro/component/moredev.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'moredev', component: MoreDevComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

export const app_routing = RouterModule.forRoot(app_routes);

export const MODULE_COMPONENTS = [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    IntroComponent,
    WorkComponent,
    TestimonialsComponent,
    ServicesComponent,
    AboutComponent,
    CountersComponent,
    ContactComponent

]
