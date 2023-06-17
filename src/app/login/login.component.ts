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
  erreur=0;

  constructor(private authService : AuthentificationService, private router: Router) { }
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
      this.router.navigate(['infosclient']);
    }
    else
      //alert('Login ou mot de passe incorrecte!');
      this.erreur = 1;
  }

  onLogout(){
    this.authService.logout();
  }

}
