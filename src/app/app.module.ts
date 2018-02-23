import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
import 'hammerjs';
import { DialogsService } from './gyntek/infraestructure/dialogs/service/dialogs.service';
import {MdDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogError} from './gyntek/infraestructure/dialogs/component/dialogserror.component';
import { DialogDevelopComponent} from './gyntek/infraestructure/dialogs/component/dialogsDevelop.component';
import {MatStepperModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import {MODULE_COMPONENTS,app_routing} from './app.routing';


@NgModule({
  declarations: [
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
    ContactComponent,
    MoreDevComponent,
    DialogError,
    DialogDevelopComponent,
    MODULE_COMPONENTS

  ],
  exports:[DialogError,DialogDevelopComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdDialogModule,
    BrowserAnimationsModule,
    MatStepperModule,
    ReactiveFormsModule,
    app_routing,
  ],
  providers: [DialogsService],
  entryComponents:[DialogError,DialogDevelopComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
