import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthentificationService} from "./service/authentification.service";

@Injectable({
  providedIn: 'root'
})
export class YearGuard implements CanActivate {
  constructor(private authService: AuthentificationService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAdmin())
      return true;
    else {
      this.router.navigate(['app-forbidden']);
      return false;
    }
  }

}
