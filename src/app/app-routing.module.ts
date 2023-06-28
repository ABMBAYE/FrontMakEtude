import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './client/add-client/add-client.component';
import { ClientsComponent } from './client/clients/clients.component';
import { LoginComponent } from './login/login.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UpdateClientParComponent } from './clientPar/update-client-par/update-client-par.component';
import { AddClientParComponent } from './clientPar/add-client-par/add-client-par.component';
import { ClientsParComponent } from './clientPar/clients-par/clients-par.component';
import { ClientsCanadaComponent } from './clientCanada/clients-canada/clients-canada.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {YearsComponent} from "./years/years/years.component";
import {AddYearComponent} from "./years/add-year/add-year.component";
import {UpdateYearComponent} from "./years/update-year/update-year.component";
import {AddGerantComponent} from "./gerant/add-gerant/add-gerant.component";
import {GerantsComponent} from "./gerant/gerants/gerants.component";
import {UpdateGerantComponent} from "./gerant/update-gerant/update-gerant.component";
import {ComptabiliteComponent} from "./comptabilite/comptabilite.component";
import {ComptaCFComponent} from "./compta-cf/compta-cf.component";
import {ComptaPSComponent} from "./compta-ps/compta-ps.component";
import {InfosclientComponent} from "./infosclient/infosclient.component";
import {UtilisateurComponent} from "./utilisateur/utilisateurs/utilisateur.component";
import {AddUtilisateurComponent} from "./utilisateur/add-utilisateur/add-utilisateur.component";
import {UpdateUtilisateurComponent} from "./utilisateur/update-utilisateur/update-utilisateur.component";
import {MaketudeGuard} from "./maketude.guard";
import {ProfileComponent} from "./profile/profile.component";
import {DetailsComponent} from "./details/details.component";

const routes: Routes = [
  {path: "clients", component : ClientsComponent, canActivate:[MaketudeGuard]},
  {path: "addClient", component : AddClientComponent, canActivate:[MaketudeGuard]},
  {path: "updateClient/:idClient", component : UpdateClientComponent, canActivate:[MaketudeGuard]},

  {path: "clientsPar", component : ClientsParComponent, canActivate:[MaketudeGuard]},
  {path: "addClientPar", component : AddClientParComponent, canActivate:[MaketudeGuard]},
  {path: "updateClientPar/:idClientPar", component : UpdateClientParComponent, canActivate:[MaketudeGuard]},

  {path: "clientsCanada", component : ClientsCanadaComponent, canActivate:[MaketudeGuard]},
  /*{path: "addClientCanada", component : AddClientCanadaComponent},
  {path: "updateClientCanada/:idClientCan", component : UpdateClientCanadaComponent},*/

  {path: "login", component : LoginComponent},

  {path: "addYear", component : AddYearComponent, canActivate:[MaketudeGuard]},
  {path: "updateYear/:idYear", component : UpdateYearComponent, canActivate:[MaketudeGuard]},
  {path: "years", component : YearsComponent, canActivate:[MaketudeGuard]},

  {path: "addGerant", component : AddGerantComponent, canActivate:[MaketudeGuard]},
  {path: "updateGerant/:idGerant", component : UpdateGerantComponent, canActivate:[MaketudeGuard]},
  {path: "gerants", component : GerantsComponent, canActivate:[MaketudeGuard]},

  {path: "accueil", component : AccueilComponent, canActivate:[MaketudeGuard]},

  {path: "comptabilite", component : ComptabiliteComponent, canActivate:[MaketudeGuard]},

  {path: "comptaCF", component : ComptaCFComponent, canActivate:[MaketudeGuard]},

  {path: "comptaPS", component : ComptaPSComponent, canActivate:[MaketudeGuard]},

  {path: "infosclient", component : InfosclientComponent},

  {path: "utilisateurs", component : UtilisateurComponent, canActivate:[MaketudeGuard]},
  {path: "addUtilisateur", component : AddUtilisateurComponent, canActivate:[MaketudeGuard]},
  {path: "updateUtilisateur/:idUser", component : UpdateUtilisateurComponent, canActivate:[MaketudeGuard]},

  {path: 'profile', component: ProfileComponent},
  {path: 'details', component: DetailsComponent},

  {path: 'app-forbidden', component: ForbiddenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

