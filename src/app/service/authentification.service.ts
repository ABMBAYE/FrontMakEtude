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
  userLog = new User();
  public loggedUser!: string;
  public loggedNom!: string;
  public loggedPrenom!: string;
  public loggedCivilite!: string;
  public loggedAdresse!: string;
  public loggedMobile!: string;
  public loggedBirthDay!: Date;
  public loggedVille!: string;
  public loggedUserUsername!: string;
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
    this.loggedUserUsername = undefined!;
    this.roleUser = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('loggedUserUsername');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  SignIn(user: User): Boolean {
    let validUser: Boolean = false;
    this.usersBDD.forEach((curUser) => {
      if (user.username == curUser.username && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser.prenomUser+" "+curUser.nomUser.toUpperCase();
        this.userLog.civilite = curUser.civilite;
        this.loggedUserUsername = curUser.username;
        this.loggedNom = curUser.nomUser;
        this.loggedPrenom = curUser.prenomUser;
        this.loggedMobile = curUser.mobile;
        this.loggedAdresse = curUser.adresse;
        this.loggedVille = curUser.ville;
        this.loggedBirthDay = curUser.birthDay;
        this.loggedCivilite = curUser.civilite;
        this.isloggedIn = true;
        this.roleUser = curUser.role;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('loggedUserUsername', this.loggedUserUsername);
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
  isFemelle():Boolean{
    if (this.loggedCivilite === 'Mademoiselle' || this.loggedCivilite === 'Madame')
      return true;
    return false;
  }
}
