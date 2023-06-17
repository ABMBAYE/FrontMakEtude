import {Injectable} from '@angular/core';
import {User} from '../model/user.model';
import {Router} from '@angular/router';
import {Role} from "../model/role.model";
import {Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  // @ts-ignore
  usersBDD : User[] = this.chargerUsers();
  /*users: User[] = [
    {"idUser": 1, "prenomUser" : "Ahmadou","nomUser" : "MBAYE", "username": "ahmadoubm18", "password": "12345", "role": "ADMIN"}
    //{"idUser": 2, "username": "Ahmadou", "password": "123", "roles": ['ADMIN']}
  ];*/
  userLog = new User();
  public loggedUser!: string;
  public loggedUserTest!: string;
  public roleUser!: string;

  public isloggedIn: Boolean = false;
  //public roles!: Role[];

  constructor(private router: Router, private userService : UserService) {
  }
  ngOnInit(): void {
    this.chargerUsers();
  }
  chargerUsers(){
    this.userService.listeUsers().subscribe(user => {
      this.usersBDD = user;
    });
  }
  // @ts-ignore
  //usersBDD : User[] = this.chargerUsers();

  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined!;
    this.loggedUserTest = undefined!;
    this.roleUser = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('loggedUserTest');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  SignIn(user: User): Boolean {
    let validUser: Boolean = false;
    this.usersBDD.forEach((curUser) => {
      if (user.username == curUser.username && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser.prenomUser+" "+curUser.nomUser.toUpperCase();
        this.loggedUserTest = curUser.username;
        this.isloggedIn = true;
        this.roleUser = curUser.role;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('loggedUserTest', this.loggedUserTest);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;
  }
  isAdmin():Boolean{
    if (!this.roleUser) //this.roles== undefiened
      return false;
    return (this.roleUser.indexOf('ADMIN') >-1);
  }
}
