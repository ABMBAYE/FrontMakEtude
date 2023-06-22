import { Component, OnInit } from '@angular/core';
import {Gerant} from "../../model/gerant.model";
import {GerantService} from "../../service/gerant.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../model/user.model";
import {UserService} from "../../service/user.service";
import {Civilite} from "../../model/civilite.model";

@Component({
  selector: 'app-update-utilisateurs',
  templateUrl: './update-utilisateur.component.html',
  styleUrls: ['./update-utilisateur.component.css']
})
export class UpdateUtilisateurComponent implements OnInit {
  currentUser = new User();
  updatedId!: number;
  listCivilites : Civilite[]

  constructor(private userService : UserService, private router : Router, private activatedRoute: ActivatedRoute) {
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
    this.userService.consulterUser(this.activatedRoute.snapshot.params['idUser']).subscribe(user =>{
      this.currentUser = user;
    });
    this.updatedId = this.currentUser.idUser;
  }
  updateUser() {
    this.userService.updateUser(this.currentUser).subscribe(user => {
      this.router.navigate(['utilisateurs']);
    });
  }
  convertToUppercase(event: any) {
    this.currentUser.role = event.target.value.toUpperCase();
  }
}
