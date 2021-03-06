import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// These prevent access to pages that should not be viewed if not logged in
import { AuthGuard } from './shared/services/guard/auth.guard';
import { SecureInnerPagesGuard } from './shared/services/guard/secure-inner-pages.guard';

// This section deals with route for authentication
import { UserComponent } from './user/user.component';
import { EditUserComponent} from './edit-user/edit-user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

// Ths is the landing page route when user is not signed in
import { MainPageComponent } from './main-page/main-page.component';

//This is the landing page route when a user is signed in. TODO: Sperate Bands from fans
import { ProfileComponent } from './profile/profile.component';

// This section deals with routes related to Bands services
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
import { MyBandsByFansComponent } from './my-bands-by-fans/my-bands-by-fans.component';

// CRUD routes for profiles. TODO: Separate Bands for Fans
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { EditProfileResolver } from './edit-profile/edit-profile.resolver';

// CRUD routes for Albums
import { CreateAlbumComponent } from './create-album/create-album.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';
import { ViewAlbumComponent } from './view-album/view-album.component';
import { EditAlbumResolver } from './edit-album/edit-album.resolver';
import { ViewAlbumResolver } from './view-album/view-album.resolver';

// CRUD routes for Bands to add Songs to Albums
import { CreateSongComponent } from './create-song/create-song.component';
import { EditSongComponent } from './edit-song/edit-song.component';
import { EditSongResolver } from './edit-song/edit-song.resolver';


// Crud routes for Events
import { CreateEventComponent } from './create-event/create-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { EditEventResolver } from './edit-event/edit-event.resolver';

// CRUD routes for Band Members
import { CreateMemberComponent } from './create-member/create-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { ViewMemberComponent } from './view-member/view-member.component';
import { ViewMemberResolver } from './view-member/view-member.resolver';
import { EditMemberResolver } from './edit-member/edit-member.resolver';

// CRUD routes for Band Videos
import { CreateVideoComponent } from './create-video/create-video.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { ViewVideoComponent } from './view-video/view-video.component';
import { EditVideoResolver } from './edit-video/edit-video.resolver';

// CRUD routes for CD  Bands Funds
import { CreateCdFundsComponent } from './create-cd-funds/create-cd-funds.component';
import { EditCdFundsComponent } from './edit-cd-funds/edit-cd-funds.component';
import { ViewCdFundsComponent } from './view-cd-funds/view-cd-funds.component';
import { EditCdFundsResolver } from './edit-cd-funds/edit-cd-funds.resolver';

//CRUD routes for Bands By Fans
import { CreateBandsByFansComponent } from './create-bands-by-fans/create-bands-by-fans.component';
import { EditBandsByFansComponent } from './edit-bands-by-fans/edit-bands-by-fans.component';
import { ViewBandsByFansComponent } from './view-bands-by-fans/view-bands-by-fans.component';
import { EditBandsByFansResolver } from './edit-bands-by-fans/edit-bands-by-fans.resolver';


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
  { path: 'my-bands-by-fans' , component: MyBandsByFansComponent, canActivate: [AuthGuard] },
  { path: 'my-bands-members' , component: MyBandsMembersComponent, canActivate: [AuthGuard] },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'create-profile', component: CreateProfileComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'profile-details/:id', component: EditProfileComponent, resolve:{data: EditProfileResolver}},
  { path: 'create-album', component: CreateAlbumComponent, canActivate: [AuthGuard] },
  { path: 'view-album', component: ViewAlbumComponent, canActivate: [AuthGuard] },
  { path: 'view-album-details/:id', component: ViewAlbumComponent, resolve:{data: ViewAlbumResolver} },
  { path: 'edit-album', component: EditAlbumComponent, canActivate: [AuthGuard] },
  { path: 'edit-album-details/:id', component: EditAlbumComponent, resolve:{data: EditAlbumResolver}},
  { path: 'create-event', component: CreateEventComponent, canActivate: [AuthGuard] },
  { path: 'view-event', component: ViewEventComponent, canActivate: [AuthGuard] },
  { path: 'edit-event', component: EditEventComponent, canActivate: [AuthGuard] },
  { path: 'edit-event-details/:id', component: EditEventComponent, resolve:{data: EditEventResolver}},
  { path: 'create-member', component: CreateMemberComponent, canActivate: [AuthGuard] },
  { path: 'view-member', component: ViewMemberComponent, canActivate: [AuthGuard] },
  { path: 'view-member-details/:id', component: ViewMemberComponent, resolve:{data: ViewMemberResolver}},
  { path: 'edit-member', component: EditMemberComponent, canActivate: [AuthGuard] },
  { path: 'edit-member-details/:id', component: EditMemberComponent, resolve:{data: EditMemberResolver}},
  { path: 'create-video', component: CreateVideoComponent, canActivate: [AuthGuard] },
  { path: 'view-video', component: ViewVideoComponent, canActivate: [AuthGuard] },
  { path: 'edit-video', component: EditVideoComponent, canActivate: [AuthGuard] },
  { path: 'edit-video-details/:id', component: EditVideoComponent, resolve:{data: EditVideoResolver}},
  { path: 'create-cd-funds', component: CreateCdFundsComponent, canActivate: [AuthGuard] },
  { path: 'view-cd-funds', component: ViewCdFundsComponent, canActivate: [AuthGuard] },
  { path: 'edit-cd-funds', component: EditCdFundsComponent, canActivate: [AuthGuard] },
  { path: 'edit-cd-funds-details/:id', component: EditCdFundsComponent, resolve:{data: EditCdFundsResolver}},
  { path: 'create-bands-by-fans', component: CreateBandsByFansComponent, canActivate: [AuthGuard] },
  { path: 'view-bands-by-fans', component: ViewBandsByFansComponent, canActivate: [AuthGuard] },
  { path: 'edit-bands-by-fans', component: EditBandsByFansComponent, canActivate: [AuthGuard] },
  { path: 'edit-bands-by-fans-details/:id', component: EditBandsByFansComponent, resolve:{data: EditBandsByFansResolver}},
  { path: 'create-song', component: CreateSongComponent, canActivate: [AuthGuard] },
  { path: 'edit-song', component: EditSongComponent, canActivate: [AuthGuard] },
  { path: 'edit-song-details/:id', component: EditSongComponent, resolve:{data: EditSongResolver}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
