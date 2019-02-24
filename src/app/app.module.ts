import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginComponent }  from './login/login.component';
import { UserComponent } from './user/user.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { ProfileService } from './shared/services/profile.service';

import { AuthService } from './shared/services/auth.service';

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
import { EditProfileResolver } from './edit-profile/edit-profile.resolver';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ProfileComponent } from './profile/profile.component';


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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule // imports firebase/auth, only needed for auth features
  ],
  providers: [AuthService, ProfileService, EditProfileResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
