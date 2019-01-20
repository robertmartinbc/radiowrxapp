import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginComponent }  from './login/login.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { FanLoginComponent } from './fan-login/fan-login.component';
import { BandLoginComponent } from './band-login/band-login.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterFanComponent } from './register-fan/register-fan.component';
import { RegisterBandComponent } from './register-band/register-band.component';
import { FanForgotPasswordComponent } from './fan-forgot-password/fan-forgot-password.component';
import { BandForgotPasswordComponent } from './band-forgot-password/band-forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    RoutingComponents,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    FanLoginComponent,
    BandLoginComponent,
    ContactComponent,
    RegisterFanComponent,
    RegisterBandComponent,
    FanForgotPasswordComponent,
    BandForgotPasswordComponent
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
  providers: [AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
