import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MzButtonModule } from 'ngx-materialize'
import { MzCardModule } from 'ngx-materialize'
import { MzIconMdiModule } from 'ngx-materialize'
import { MzParallaxModule } from 'ngx-materialize'

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'endless'),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    BrowserModule,
    MzButtonModule,
    MzCardModule,
    MzIconMdiModule,
    MzParallaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
