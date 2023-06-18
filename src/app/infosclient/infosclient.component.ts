import { Component, OnInit } from '@angular/core';
import {ClientService} from "../service/client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Client} from "../model/client.model";
import {User} from "../model/user.model";
import {UserService} from "../service/user.service";
import {AuthentificationService} from "../service/authentification.service";

@Component({
  selector: 'app-infosclient',
  templateUrl: './infosclient.component.html',
  styleUrls: ['./infosclient.component.css']
})
export class InfosclientComponent implements OnInit {
  clients: Client[] = [];
  users: User[] = [];
  filteredClients: Client[] = [];
  currentUser !: User;
  constructor(public authService : AuthentificationService, private route: ActivatedRoute,
              private userService : UserService, private clientService : ClientService) { }

  ngOnInit(): void {
    this.chargerClients();
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
  chargerUsers() {
    this.userService.listeUsers().subscribe(users => {
      this.users = users;
      this.chargerClients();
    });
  }
}
