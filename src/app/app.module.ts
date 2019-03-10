import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { LoginComponent }  from './login/login.component';
import { UserComponent } from './user/user.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BandsComponent } from './bands/bands.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { VideosComponent } from './videos/videos.component';
import { CdFundsComponent } from './cd-funds/cd-funds.component'
import { BandsByFansComponent } from './bands-by-fans/bands-by-fans.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MyBandsMusicComponent } from './my-bands-music/my-bands-music.component';
import { MyBandsEventsComponent } from './my-bands-events/my-bands-events.component';
import { MyBandsVideosComponent } from './my-bands-videos/my-bands-videos.component';
import { MyBandsCdFundsComponent } from './my-bands-cd-funds/my-bands-cd-funds.component';
import { MyBandsPrivatePartiesComponent } from './my-bands-private-parties/my-bands-private-parties.component';
import { MyBandsMembersComponent } from './my-bands-members/my-bands-members.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileResolver } from './edit-profile/edit-profile.resolver'
import { CreateAlbumComponent } from './create-album/create-album.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';
import { ViewAlbumComponent } from './view-album/view-album.component';
import { EditAlbumResolver } from './edit-album/edit-album.resolver';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { ProfileService } from './shared/services/profile.service';

import { AuthService } from './shared/services/auth.service';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BandsComponent,
    EventsComponent,
    VideosComponent,
    CdFundsComponent,
    BandsByFansComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    ContactComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    EditUserComponent,
    MyBandsMusicComponent,
    MyBandsEventsComponent,
    MyBandsVideosComponent,
    MyBandsCdFundsComponent,
    MyBandsPrivatePartiesComponent,
    MyBandsMembersComponent,
    EditProfileComponent,
    CreateProfileComponent,
    ProfileComponent,
    AvatarDialogComponent,
    CreateAlbumComponent,
    EditAlbumComponent,
    ViewAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    BrowserAnimationsModule
  ],
  providers: [AuthService, ProfileService, EditProfileResolver, EditAlbumResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
