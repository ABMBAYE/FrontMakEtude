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
import { AddClientCanadaComponent } from './clientCanada/add-client-canada/add-client-canada.component';
import { UpdateClientCanadaComponent } from './clientCanada/update-client-canada/update-client-canada.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ClientGuard } from './client.guard';
import {YearsComponent} from "./years/years/years.component";
import {AddYearComponent} from "./years/add-year/add-year.component";
import {UpdateYearComponent} from "./years/update-year/update-year.component";
import {AddGerantComponent} from "./gerant/add-gerant/add-gerant.component";
import {GerantsComponent} from "./gerant/gerants/gerants.component";
import {UpdateGerantComponent} from "./gerant/update-gerant/update-gerant.component";
import {ComptabiliteComponent} from "./comptabilite/comptabilite.component";
import {YearGuard} from "./year.guard";
import {GerantGuard} from "./gerant.guard";
import {ComptaCFComponent} from "./compta-cf/compta-cf.component";
import {ComptaPSComponent} from "./compta-ps/compta-ps.component";
import {InfosclientComponent} from "./infosclient/infosclient.component";
import {UtilisateurComponent} from "./utilisateur/utilisateurs/utilisateur.component";
import {AddUtilisateurComponent} from "./utilisateur/add-utilisateur/add-utilisateur.component";
import {UpdateUtilisateurComponent} from "./utilisateur/update-utilisateur/update-utilisateur.component";

const routes: Routes = [
  {path: "clients", component : ClientsComponent, canActivate:[ClientGuard]},
  {path: "addClient", component : AddClientComponent, canActivate:[ClientGuard]},
  {path: "updateClient/:idClient", component : UpdateClientComponent, canActivate:[ClientGuard]},

  {path: "clientsPar", component : ClientsParComponent},
  {path: "addClientPar", component : AddClientParComponent},
  {path: "updateClientPar/:idClientPar", component : UpdateClientParComponent},

  {path: "clientsCanada", component : ClientsCanadaComponent},
  /* {path: "addClientCanada", component : AddClientCanadaComponent},
  {path: "updateClientCanada/:idClientCan", component : UpdateClientCanadaComponent}, */

  {path: "login", component : LoginComponent},

  {path: "addYear", component : AddYearComponent, canActivate:[YearGuard]},
  {path: "updateYear/:idYear", component : UpdateYearComponent, canActivate:[YearGuard]},
  {path: "years", component : YearsComponent, canActivate:[YearGuard]},

  {path: "addGerant", component : AddGerantComponent, canActivate:[GerantGuard]},
  {path: "updateGerant/:idGerant", component : UpdateGerantComponent, canActivate:[GerantGuard]},
  {path: "gerants", component : GerantsComponent, canActivate:[GerantGuard]},

  {path: "accueil", component : AccueilComponent, canActivate:[ClientGuard]},

  {path: "comptabilite", component : ComptabiliteComponent},

  {path: "comptaCF", component : ComptaCFComponent},

  {path: "comptaPS", component : ComptaPSComponent},

  {path: "infosclient", component : InfosclientComponent},

  {path: "utilisateurs", component : UtilisateurComponent},
  {path: "addUtilisateur", component : AddUtilisateurComponent},
  {path: "updateUtilisateur/:idUser", component : UpdateUtilisateurComponent},


  {path: 'app-forbidden', component: ForbiddenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

