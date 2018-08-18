import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// import { AuthGuard } from './guards/auth.guard';
// import { NotAuthGuard } from './guards/not-auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
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