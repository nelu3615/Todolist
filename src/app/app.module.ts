import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TouteTachesComponent } from './toute-taches/toute-taches.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginErrorComponent } from './login-error/login-error.component';
import { TacheComponent } from './tache/tache.component';
import { AddTacheComponent } from './add-tache/add-tache.component';
import { InMemoryDbService, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EditTacheComponent } from './edit-tache/edit-tache.component';

@NgModule({
  declarations: [
    AppComponent,
    TouteTachesComponent,
    AccueilComponent,
    LoginComponent,
    LogoutComponent,
    LoginErrorComponent,
    TacheComponent,
    AddTacheComponent,
    EditTacheComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
