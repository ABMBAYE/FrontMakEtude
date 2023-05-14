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

const routes: Routes = [
  {path: "clients", component : ClientsComponent},
  {path: "addClient", component : AddClientComponent, canActivate:[ClientGuard]},
  {path: "updateClient/:idClient", component : UpdateClientComponent},

  {path: "clientsPar", component : ClientsParComponent},
  {path: "addClientPar", component : AddClientParComponent},
  {path: "updateClientPar/:idClientPar", component : UpdateClientParComponent},

  {path: "clientsCanada", component : ClientsCanadaComponent},
  /* {path: "addClientCanada", component : AddClientCanadaComponent},
  {path: "updateClientCanada/:idClientCan", component : UpdateClientCanadaComponent}, */

  {path: "login", component : LoginComponent},

  {path: "addYear", component : AddYearComponent},
  {path: "updateYear/:idYear", component : UpdateYearComponent},
  {path: "years", component : YearsComponent},

  {path: "addGerant", component : AddGerantComponent},
  {path: "updateGerant/:idGerant", component : UpdateGerantComponent},
  {path: "gerants", component : GerantsComponent},

  {path: "accueil", component : AccueilComponent},

  {path: "comptabilite", component : ComptabiliteComponent},

  {path: 'app-forbidden', component: ForbiddenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

