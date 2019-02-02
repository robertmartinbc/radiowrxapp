import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { EditUserComponent} from './edit-user/edit-user.component'
import { FanLoginComponent } from './fan-login/fan-login.component';
import { BandLoginComponent } from './band-login/band-login.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { RegisterFanComponent } from './register-fan/register-fan.component';
import { RegisterBandComponent } from './register-band/register-band.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { FanForgotPasswordComponent } from './fan-forgot-password/fan-forgot-password.component';
import { BandForgotPasswordComponent } from './band-forgot-password/band-forgot-password.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EventsComponent } from './events/events.component';
import { BandsComponent } from './bands/bands.component';
import { VideosComponent } from './videos/videos.component';
import { CdFundsComponent } from './cd-funds/cd-funds.component';
import { BandsByFansComponent } from './bands-by-fans/bands-by-fans.component';
import { ContactComponent } from './contact/contact.component';
import { MyBandsEventsComponent } from './my-bands-events/my-bands-events.component';
import { MyBandsMusicComponent } from './my-bands-music/my-bands-music.component';
import { MyBandsVideosComponent } from './my-bands-videos/my-bands-videos.component';

import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './shared/guard/auth.guard';
import { SecureInnerPagesGuard } from "./shared/guard/secure-inner-pages.guard";


const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'fan-login', component: FanLoginComponent, canActivate: [AuthGuard] },
  { path: 'band-login', component: BandLoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'register-fan', component: RegisterFanComponent },
  { path: 'register-band', component: RegisterBandComponent, canActivate: [AuthGuard] },
  { path: 'fan-forgot-password', component: FanForgotPasswordComponent },
  { path: 'band-forgot-password', component: BandForgotPasswordComponent },
  { path: 'bands', component: BandsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'cd-funds', component: CdFundsComponent },
  { path: 'bands-by-fans', component: BandsByFansComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}},
  { path: 'edit-user', component: EditUserComponent, canActivate: [AuthGuard] },
  { path: 'my-bands-events' , component: MyBandsEventsComponent, canActivate: [AuthGuard] },
  { path: 'my-bands-music' , component: MyBandsMusicComponent, canActivate: [AuthGuard] },
  { path: 'my-bands-videos' , component: MyBandsVideosComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  FanLoginComponent,
  BandLoginComponent,
  LoginComponent,
  RegisterComponent,
  VerifyEmailComponent,
  ForgotPasswordComponent,
  MainPageComponent,
  EventsComponent,
  BandsComponent,
  VideosComponent,
  CdFundsComponent,
  BandsByFansComponent,
  ContactComponent
]
