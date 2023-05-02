import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './client/clients/clients.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateClientComponent } from './client/update-client/update-client.component';
import { LoginComponent } from './login/login.component';
import { RechercheParNomComponent } from './client/recherche-par-nom/recherche-par-nom.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ClientsParComponent } from './clientPar/clients-par/clients-par.component';
import { AddClientParComponent } from './clientPar/add-client-par/add-client-par.component';
import { UpdateClientParComponent } from './clientPar/update-client-par/update-client-par.component';
import { AddClientCanadaComponent } from './clientCanada/add-client-canada/add-client-canada.component';
import { UpdateClientCanadaComponent } from './clientCanada/update-client-canada/update-client-canada.component';
import { ClientsCanadaComponent } from './clientCanada/clients-canada/clients-canada.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { YearComponent } from './year/year.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    AddClientComponent,
    UpdateClientComponent,
    LoginComponent,
    RechercheParNomComponent,
    AccueilComponent,
    ClientsParComponent,
    AddClientParComponent,
    UpdateClientParComponent,
    AddClientCanadaComponent,
    UpdateClientCanadaComponent,
    ClientsCanadaComponent,
    ForbiddenComponent,
    YearComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
