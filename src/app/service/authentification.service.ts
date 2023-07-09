import {Injectable} from '@angular/core';
import {User} from '../model/user.model';
import {Router} from '@angular/router';
import {UserService} from "./user.service";
import {ClientPar} from "../model/clientpar.model";
import {Client} from "../model/client.model";
import {ClientService} from "./client.service";

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
  public loggedBirthDay !: Date;
  public loggedVille !: string;
  public loggedUserUsername !: string;
  public loggedRole!: string;

  public isloggedIn: Boolean = false;
  //public roles!: Role[];

  constructor(private router: Router, private userService : UserService, private clientService : ClientService) {
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
    this.loggedCivilite = undefined!;
    this.loggedAdresse = undefined!;
    this.loggedBirthDay = undefined!;
    this.loggedPrenom = undefined!;
    this.loggedVille = undefined!;
    this.loggedMobile = undefined!;
    this.loggedRole = undefined!;
    this.loggedNom = undefined!;

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
        this.loggedUserUsername = curUser.username;
        this.loggedNom = curUser.nomUser;
        this.loggedPrenom = curUser.prenomUser;
        this.loggedMobile = curUser.mobile;
        this.loggedAdresse = curUser.adresse;
        this.loggedVille = curUser.ville;
        this.loggedBirthDay = curUser.birthDay;
        this.loggedCivilite = curUser.civilite;
        this.loggedRole = curUser.role;

        this.isloggedIn = true;

        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('loggedUserUsername', this.loggedUserUsername);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;
  }
  isAdmin():Boolean{
    if (!this.loggedRole)
      return false;
    return (this.loggedRole.indexOf('ADMIN') >-1);
  }
  isFemelle():Boolean{
    if (this.loggedCivilite === 'Mademoiselle' || this.loggedCivilite === 'Madame')
      return true;
    return false;
  }

  isCF():Boolean{
    if (this.loggedUserUsername.startsWith("SN"))
      return true;
    return false;
  }
  isPS():Boolean{
    if (!this.loggedUserUsername.startsWith("SN"))
      return true;
    return false;
  }
}
