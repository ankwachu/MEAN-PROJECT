import { ApiService } from './service/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogListComponent } from './components/dog-list/dog-list.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateDogComponent } from './components/create-dog/create-dog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DogDetailComponent } from './components/dog-detail/dog-detail.component';
import { GuidelineComponent } from './components/guideline/guideline.component';
import { ClipboardDirective } from './directive/clipboard.directive';
import { SigninComponent } from './components/user/signin/signin.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { AuthInterceptor } from './shared/authconfig.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DogListComponent,
    HeaderComponent,
    CreateDogComponent,
    DogDetailComponent,
    GuidelineComponent,
    ClipboardDirective,
    SigninComponent,
    SignupComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
