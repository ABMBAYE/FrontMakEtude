import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../model/user.model";
import {UserService} from "../../service/user.service";
import {BoolList} from "../../model/boolean.model";
import {Civilite} from "../../model/civilite.model";

@Component({
  selector: 'app-add-utilisateurs',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.css']
})
export class AddUtilisateurComponent implements OnInit {

  newUser = new User();
  users! : User[];
  listCivilites : Civilite[]
  constructor(private userService : UserService, private router: Router) {
    this.listCivilites = [
      {
        idCivilite : 1, civilite : "Madame"
      },
      {
        idCivilite : 2, civilite : "Mademoiselle"
      },
      {
        idCivilite : 3, civilite : "Monsieur"
      }
    ]
  }

  ngOnInit(): void {
  }
  civilites():Civilite[]{
    return this.listCivilites;
  }
  addUser() {
    this.userService.ajouterUser(this.newUser).subscribe(user => {
      this.router.navigate(['utilisateurs']);
    });
  }
}
