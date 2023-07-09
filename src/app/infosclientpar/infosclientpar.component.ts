import { Component, OnInit } from '@angular/core';
import {ClientPar} from "../model/clientpar.model";
import {User} from "../model/user.model";
import {ClientParService} from "../service/client-par.service";
import {AuthentificationService} from "../service/authentification.service";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-infosclientpar',
  templateUrl: './infosclientpar.component.html',
  styleUrls: ['./infosclientpar.component.css']
})
export class InfosclientparComponent implements OnInit {
  clientsPar: ClientPar[] = [];
  users: User[] = [];
  filteredClientsPar: ClientPar[] = [];
  constructor(public authService : AuthentificationService, private userService : UserService, private clientParService : ClientParService) { }

  ngOnInit(): void {
    this.chargerClientsPar();
    this.chargerUsers();
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
      this.chargerClientsPar();
    });
  }
}
