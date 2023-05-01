import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './client/add-client/add-client.component';
import { ClientsComponent } from './client/clients/clients.component';
import { LoginComponent } from './login/login.component';
import { RechercheParNomComponent } from './client/recherche-par-nom/recherche-par-nom.component';
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

const routes: Routes = [
  {path: "clients", component : ClientsComponent},
  {path: "addClient", component : AddClientComponent, canActivate:[ClientGuard]},
  {path: "updateClient/:idClient", component : UpdateClientComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},

  {path: "clientsPar", component : ClientsParComponent},
  {path: "addClientPar", component : AddClientParComponent},
  {path: "updateClientPar/:idClientPar", component : UpdateClientParComponent},

  {path: "clientsCanada", component : ClientsCanadaComponent},
  /* {path: "addClientCanada", component : AddClientCanadaComponent},
  {path: "updateClientCanada/:idClientCan", component : UpdateClientCanadaComponent}, */

  {path: "login", component : LoginComponent},
  {path: "accueil", component : AccueilComponent},

  {path: 'app-forbidden', component: ForbiddenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

