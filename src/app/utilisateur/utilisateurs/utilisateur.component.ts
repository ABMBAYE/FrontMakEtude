import { Component, OnInit } from '@angular/core';
import {Client} from "../../model/client.model";
import {User} from "../../model/user.model";
import {UserService} from "../../service/user.service";
import {Gerant} from "../../model/gerant.model";

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  users! : User[];
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.chargerUsers();
  }
  chargerUsers(){
    this.userService.listeUsers().subscribe(user => {
      this.users = user;
    });
  }

  supprimerUser(user : User) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.userService.supprimerUser(user.idUser).subscribe(() => {
        this.chargerUsers();
      });
    }
  }
}
