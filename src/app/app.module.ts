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
import { AccueilComponent } from './accueil/accueil.component';
import { ClientsParComponent } from './clientPar/clients-par/clients-par.component';
import { AddClientParComponent } from './clientPar/add-client-par/add-client-par.component';
import { UpdateClientParComponent } from './clientPar/update-client-par/update-client-par.component';
import { AddClientCanadaComponent } from './clientCanada/add-client-canada/add-client-canada.component';
import { UpdateClientCanadaComponent } from './clientCanada/update-client-canada/update-client-canada.component';
import { ClientsCanadaComponent } from './clientCanada/clients-canada/clients-canada.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AddYearComponent } from './years/add-year/add-year.component';
import { YearsComponent } from './years/years/years.component';
import { UpdateYearComponent } from './years/update-year/update-year.component';
import { AddGerantComponent } from './gerant/add-gerant/add-gerant.component';
import { UpdateGerantComponent } from './gerant/update-gerant/update-gerant.component';
import { GerantsComponent } from './gerant/gerants/gerants.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from "@angular/material/select";
import {MatDialogContent, MatDialogModule} from "@angular/material/dialog";
import { ComptaCFComponent } from './compta-cf/compta-cf.component';
import { ComptaPSComponent } from './compta-ps/compta-ps.component';
import { InfosclientComponent } from './infosclient/infosclient.component';
import { UtilisateurComponent } from './utilisateur/utilisateurs/utilisateur.component';
import { AddUtilisateurComponent } from './utilisateur/add-utilisateur/add-utilisateur.component';
import { UpdateUtilisateurComponent } from './utilisateur/update-utilisateur/update-utilisateur.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    AddClientComponent,
    UpdateClientComponent,
    LoginComponent,
    AccueilComponent,
    ClientsParComponent,
    AddClientParComponent,
    UpdateClientParComponent,
    AddClientCanadaComponent,
    UpdateClientCanadaComponent,
    ClientsCanadaComponent,
    ForbiddenComponent,
    AddYearComponent,
    YearsComponent,
    UpdateYearComponent,
    AddGerantComponent,
    UpdateGerantComponent,
    GerantsComponent,
    ComptabiliteComponent,
    ComptaCFComponent,
    ComptaPSComponent,
    InfosclientComponent,
    UtilisateurComponent,
    AddUtilisateurComponent,
    UpdateUtilisateurComponent,
    ProfileComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
