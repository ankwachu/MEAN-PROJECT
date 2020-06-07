import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogListComponent } from './components/dog-list/dog-list.component';
import { CreateDogComponent } from './components/create-dog/create-dog.component';
import { DogDetailComponent } from './components/dog-detail/dog-detail.component';
import { SigninComponent } from './components/user/signin/signin.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: 'home', component: DogListComponent},
  { path: 'create', component: CreateDogComponent},
  { path: 'dogs/:id', component: DogDetailComponent},
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'log-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'user-profile/:id', component: UserProfileComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
