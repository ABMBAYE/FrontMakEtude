import { Component, OnInit } from '@angular/core';
import {ClientService} from "../service/client.service";
import {Client} from "../model/client.model";
import {User} from "../model/user.model";
import {UserService} from "../service/user.service";
import {AuthentificationService} from "../service/authentification.service";
import {ClientPar} from "../model/clientpar.model";
import {ClientParService} from "../service/client-par.service";

@Component({
  selector: 'app-infosclient',
  templateUrl: './infosclient.component.html',
  styleUrls: ['./infosclient.component.css']
})
export class InfosclientComponent implements OnInit {
  clients: Client[] = [];
  users: User[] = [];
  filteredClients: Client[] = [];

  clientsPar: ClientPar[] = [];
  filteredClientsPar: ClientPar[] = [];
  constructor(public authService : AuthentificationService, private userService : UserService,
              private clientService : ClientService, private clientParService : ClientParService) { }

  ngOnInit(): void {
    this.chargerClients();
    this.chargerClientsPar();
    this.chargerUsers();
  }
  chargerClients() {
    this.clientService.listeClients().subscribe(clients => {
      this.clients = clients;
      this.filteredClients = this.clients.filter(client => {
        const user = this.users.find(user => user.username === client.identifiant);
        return user !== undefined;
      });
    });
  }
  chargerClientsPar() {
    this.clientParService.listeClientPar().subscribe(data => {
      this.clientsPar = data;
      this.filteredClientsPar = this.clientsPar.filter(client => {
        const user = this.users.find(user => user.username === client.numDossier);
        return user !== undefined;
      });
    });
  }
  chargerUsers() {
    this.userService.listeUsers().subscribe(users => {
      this.users = users;
      this.chargerClients();
    });
  }
}
