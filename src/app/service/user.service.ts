import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../model/client.model";
import {User} from "../model/user.model";
import {FormGroup} from "@angular/forms";
import {Gerant} from "../model/gerant.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: string = 'http://localhost:8080/maketude';

  constructor(private http: HttpClient) {
    this.listeUsers();
  }
  ajouterUser(user : User): Observable<User> {
    return this.http.post<User>(`${this.apiURL}/users`, user, httpOptions);
  }
  listeUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURL+"/users");
  }
  updateUser(user : User) : Observable<User> {
    return this.http.put<User>(`${this.apiURL}/users`, user, httpOptions);
  }
  supprimerUser(idUser : number) {
    const url = `${this.apiURL}/users/${idUser}`;
    return this.http.delete(url, httpOptions);
  }
  consulterUser(idUser : User): Observable<User> {
    const url = `${this.apiURL}/users/${idUser}`;
    return this.http.get<User>(url);
  }
}
