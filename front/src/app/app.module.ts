import { ApiService } from './service/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogListComponent } from './components/dog-list/dog-list.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateDogComponent } from './components/create-dog/create-dog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DogDetailComponent } from './components/dog-detail/dog-detail.component';
import { GuidelineComponent } from './components/guideline/guideline.component';
import { ClipboardDirective } from './directive/clipboard.directive';

@NgModule({
  declarations: [
    AppComponent,
    DogListComponent,
    HeaderComponent,
    CreateDogComponent,
    DogDetailComponent,
    GuidelineComponent,
    ClipboardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
