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
    console.log(this.user); 
    let isValidUser: Boolean = this.authService.SignIn(this.user); 
    if (isValidUser) 
      this.router.navigate(['accueil']); 
    else 
      //alert('Login ou mot de passe incorrecte!');
      this.erreur = 1; 
  }

}
