import { Component } from '@angular/core';
import { AuthentificationService } from './service/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MakEtude';

  constructor (public authService: AuthentificationService, private router : Router) {}

  /* ngOnInit (): void {
    let isloggedin: string;
    let loggedUser:string;

    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');

    if (isloggedin!="true" || !loggedUser)
      this.router.navigate(['/login']);
    else this.authService.setLoggedUserFromLocalStorage(loggedUser);
  } */
  onLogout(){
    this.authService.logout();
  }
}
