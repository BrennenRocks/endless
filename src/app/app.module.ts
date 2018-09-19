import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MzModule } from './components/shared/mz.module';
import { SeparateArrayPipe } from './pipes/separate-array.pipe';
import { AddPostComponent } from './components/add-post/add-post.component';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { FileSizePipe } from './pipes/file-size.pipe';
import { ProgressionComponent } from './components/progression/progression.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    SeparateArrayPipe,
    AddPostComponent,
    DropZoneDirective,
    FileSizePipe,
    ProgressionComponent,
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase, 'endless'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
