import {Injectable} from '@angular/core';
import {User} from '../model/user.model';
import {Router} from '@angular/router';
import {Role} from "../model/role.model";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
 /* users: User[] = [
    {"idUser": 1, "username": "Khadim", "password": "123", "roles": {"idRole" : 1, "role" : "USER"}},
    {"idUser": 2, "username": "Ahmadou", "password": "123", "roles": ['ADMIN']}
  ];*/

  public loggedUser!: string;

  public isloggedIn: Boolean = false;
  public roles!: Role[];

  constructor(private router: Router) {
  }

  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined!;
    this.roles = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  SignIn(user: User): Boolean {
    /*let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (user.username == curUser.username && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;*/
    return true;
  }

  isAdmin(): Boolean {
    /*if (!this.roles) // this.roles== undefiened
      return false;
    // @ts-ignore
    return (this.roles.indexOf('ADMIN') > -1);*/
    return true;
  }

  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(username: string) {
/*    this.users.forEach((curUser) => {
      if (curUser.username == username) {
        this.roles = curUser.roles;
      }
    });*/
  }
}
