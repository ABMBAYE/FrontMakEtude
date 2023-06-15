import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../model/user.model";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-add-utilisateurs',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.css']
})
export class AddUtilisateurComponent implements OnInit {

  newUser = new User();
  users! : User[];

  constructor(private userService : UserService, private router: Router) { }

  ngOnInit(): void {
  }

  addUser() {
    this.userService.ajouterUser(this.newUser).subscribe(user => {
      this.router.navigate(['users']);
    });
  }
}
