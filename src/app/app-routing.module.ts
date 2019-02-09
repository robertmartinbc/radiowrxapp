import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { EditUserComponent} from './edit-user/edit-user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
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

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'bands', component: BandsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'cd-funds', component: CdFundsComponent },
  { path: 'bands-by-fans', component: BandsByFansComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user', component: UserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'my-bands-events' , component: MyBandsEventsComponent },
  { path: 'my-bands-music' , component: MyBandsMusicComponent },
  { path: 'my-bands-videos' , component: MyBandsVideosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
