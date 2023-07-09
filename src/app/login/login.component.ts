import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur = 0;

  constructor(private authService : AuthentificationService, private router : Router) { }
  ngOnInit(): void {
  }

  onLoggedin(){
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    let isValidAdmin: Boolean = this.authService.isAdmin();
    let isValidEtudiant: Boolean = !this.authService.isAdmin();

    if (isValidUser && isValidAdmin){
      this.router.navigate(['accueil']);
    }
    else if(isValidUser && isValidEtudiant){
      if(this.authService.isCF()){
        this.router.navigate(['infosclient']);
      }else if(this.authService.isPS()){
        this.router.navigate(['infosclientpar']);
      }
    }
    else
      this.erreur = 1;
  }

  onLogout(){
    this.authService.logout();
  }
}
