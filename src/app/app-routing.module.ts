import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// import { NotAuthGuard } from './guards/not-auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AuthGuard } from './guards/auth.guard';
import { ProgressionComponent } from './components/progression/progression.component';
import { PreloadGuard } from './guards/preload.guard';

const appRoutes = [
  { path: '', component: HomeComponent, resolve: [PreloadGuard] },
  { path: 'progression', component: ProgressionComponent, resolve: [PreloadGuard] },
  { path: 'supersecretlogin', component: LoginComponent },
  { path: 'add-post', component: AddPostComponent, canActivate: [AuthGuard] },
  { path: '**', component: HomeComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }