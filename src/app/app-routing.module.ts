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
import { BandsByFansComponent } from './bands-by-fans/bands-by-fans.component';
import { ContactComponent } from './contact/contact.component';
import { MyBandsEventsComponent } from './my-bands-events/my-bands-events.component';
import { MyBandsMusicComponent } from './my-bands-music/my-bands-music.component';
import { MyBandsVideosComponent } from './my-bands-videos/my-bands-videos.component';
import { MyBandsCdFundsComponent } from './my-bands-cd-funds/my-bands-cd-funds.component';
import { MyBandsPrivatePartiesComponent } from './my-bands-private-parties/my-bands-private-parties.component';
import { MyBandsMembersComponent } from './my-bands-members/my-bands-members.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { EditProfileResolver } from './edit-profile/edit-profile.resolver';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';
import { ViewAlbumComponent } from './view-album/view-album.component';
import { EditAlbumResolver } from './edit-album/edit-album.resolver';
import { CreateEventComponent } from './create-event/create-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { EditEventResolver } from './edit-event/edit-event.resolver';
import { CreateMemberComponent } from './create-member/create-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { ViewMemberComponent } from './view-member/view-member.component';
import { EditMemberResolver } from './edit-member/edit-member.resolver';
import { CreateVideoComponent } from './create-video/create-video.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { ViewVideoComponent } from './view-video/view-video.component';
import { EditVideoResolver } from './edit-video/edit-video.resolver';
import { CreateCdFundsComponent } from './create-cd-funds/create-cd-funds.component';
import { EditCdFundsComponent } from './edit-cd-funds/edit-cd-funds.component';
import { ViewCdFundsComponent } from './view-cd-funds/view-cd-funds.component';
import { EditCdFundsResolver } from './edit-cd-funds/edit-cd-funds.resolver';


import { AuthGuard } from './shared/services/guard/auth.guard';
import { SecureInnerPagesGuard } from './shared/services/guard/secure-inner-pages.guard';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent },
  { path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'bands', component: BandsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'bands-by-fans', component: BandsByFansComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'my-bands-events' , component: MyBandsEventsComponent, canActivate: [AuthGuard] },
  { path: 'my-bands-music' , component: MyBandsMusicComponent, canActivate: [AuthGuard] },
  { path: 'my-bands-videos' , component: MyBandsVideosComponent, canActivate: [AuthGuard] },
  { path: 'my-bands-cd-funds' , component: MyBandsCdFundsComponent, canActivate: [AuthGuard] },
  { path: 'my-bands-private-parties' , component: MyBandsPrivatePartiesComponent, canActivate: [AuthGuard] },
  { path: 'my-bands-members' , component: MyBandsMembersComponent, canActivate: [AuthGuard] },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'create-profile', component: CreateProfileComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'profile-details/:id', component: EditProfileComponent, resolve:{data: EditProfileResolver}},
  { path: 'create-album', component: CreateAlbumComponent, canActivate: [AuthGuard] },
  { path: 'view-album', component: ViewAlbumComponent, canActivate: [AuthGuard] },
  { path: 'edit-album', component: EditAlbumComponent, canActivate: [AuthGuard] },
  { path: 'album-details/:id', component: EditAlbumComponent, resolve:{data: EditAlbumResolver}},
  { path: 'create-event', component: CreateEventComponent, canActivate: [AuthGuard] },
  { path: 'view-event', component: ViewEventComponent, canActivate: [AuthGuard] },
  { path: 'edit-event', component: EditEventComponent, canActivate: [AuthGuard] },
  { path: 'event-details/:id', component: EditEventComponent, resolve:{data: EditEventResolver}},
  { path: 'create-member', component: CreateMemberComponent, canActivate: [AuthGuard] },
  { path: 'view-member', component: ViewMemberComponent, canActivate: [AuthGuard] },
  { path: 'edit-member', component: EditMemberComponent, canActivate: [AuthGuard] },
  { path: 'member-details/:id', component: EditMemberComponent, resolve:{data: EditMemberResolver}},
  { path: 'create-video', component: CreateVideoComponent, canActivate: [AuthGuard] },
  { path: 'view-video', component: ViewVideoComponent, canActivate: [AuthGuard] },
  { path: 'edit-video', component: EditVideoComponent, canActivate: [AuthGuard] },
  { path: 'video-details/:id', component: EditVideoComponent, resolve:{data: EditVideoResolver}},
  { path: 'create-cd-funds', component: CreateCdFundsComponent, canActivate: [AuthGuard] },
  { path: 'view-cd-funds', component: ViewCdFundsComponent, canActivate: [AuthGuard] },
  { path: 'edit-cd-funds', component: EditCdFundsComponent, canActivate: [AuthGuard] },
  { path: 'cd-funds-details/:id', component: EditCdFundsComponent, resolve:{data: EditCdFundsResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
