import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FanLoginComponent } from './fan-login/fan-login.component';
import { BandLoginComponent } from './band-login/band-login.component';
import { RegisterFanComponent } from './register-fan/register-fan.component';
import { RegisterBandComponent } from './register-band/register-band.component';
import { FanForgotPasswordComponent } from './fan-forgot-password/fan-forgot-password.component';
import { BandForgotPasswordComponent } from './band-forgot-password/band-forgot-password.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EventsComponent } from './events/events.component';
import { BandsComponent } from './bands/bands.component';
import { VideosComponent } from './videos/videos.component';
import { CdFundsComponent } from './cd-funds/cd-funds.component';
import { BandsByFansComponent } from './bands-by-fans/bands-by-fans.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'fan-login', component: FanLoginComponent },
  { path: 'band-login', component: BandLoginComponent },
  { path: 'register-fan', component: RegisterFanComponent },
  { path: 'register-band', component: RegisterBandComponent },
  { path: 'fan-forgot-password', component: FanForgotPasswordComponent },
  { path: 'band-forgot-password', component: BandForgotPasswordComponent },
  { path: 'bands', component: BandsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'cd-funds', component: CdFundsComponent },
  { path: 'bands-by-fans', component: BandsByFansComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  FanLoginComponent,
  BandLoginComponent,
  MainPageComponent,
  EventsComponent,
  BandsComponent,
  VideosComponent,
  CdFundsComponent,
  BandsByFansComponent,
  ContactComponent
]
