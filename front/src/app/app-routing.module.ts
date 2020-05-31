import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogListComponent } from './components/dog-list/dog-list.component';
import { CreateDogComponent } from './components/create-dog/create-dog.component';
import { DogDetailComponent } from './components/dog-detail/dog-detail.component';

const routes: Routes = [
  { path: 'home', component: DogListComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'create', component: CreateDogComponent},
  { path: 'dogs/:id', component: DogDetailComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
