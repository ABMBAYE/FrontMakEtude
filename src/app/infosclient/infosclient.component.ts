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
    //this.filterClientsByUser();
    this.currentUser = this.getCurrentUser();
  }
  /*chargerClients(){
    this.clientService.listeClients().subscribe(client => {
      this.clients = client;
      this.filteredClients = this.clients;
    });
  }*/
  chargerClients() {
    this.clientService.listeClients().subscribe(clients => {
      this.clients = clients;
      this.filteredClients = this.clients.filter(client => {
        const user = this.users.find(user => user.username === client.identifiant);
        return user !== undefined;
      });
    });
  }
  chargerUsers(){
    this.userService.listeUsers().subscribe(user => {
      this.users = user;
    });
  }
  getCurrentUser(): User {
    // Récupérer l'utilisateur actuel à partir de l'authentification ou autre moyen
    // Retourner l'utilisateur courant
    // Exemple :
    const usernameTest = this.authService.loggedUserTest;
    const username = this.users.find(user => user.username);
    console.log("Current User 1 : "+this.authService.loggedUserTest)
    console.log("Current User 2 : "+this.chargerUsers())
    console.log("Current User 2 : "+username)
    // @ts-ignore
    return this.users.find(user => user.username === usernameTest);
  }
}
