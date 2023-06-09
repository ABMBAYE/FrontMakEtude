import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../model/client.model';
import { BoolList } from '../model/boolean.model';
import {Year} from "../model/year.model";
import {FormGroup} from "@angular/forms";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  listBol : BoolList[]

  apiURL: string = 'http://localhost:8080/campusFrance';
  constructor(private http: HttpClient) {
    this.listBol = [
      {
        idBool : 1, boolValue : "Oui"
      },
      {
        idBool : 2, boolValue : "Non"
      }
    ]
   }

  bools():BoolList[]{
    return this.listBol;
  }
  listeClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiURL+"/clients");
  }

  ajouterClient(form: FormGroup): Observable<Client> {
    return this.http.post<Client>(`${this.apiURL}/clients`, form, httpOptions);
  }

  supprimerClient(idClient : number) {
    const url = `${this.apiURL}/clients/${idClient}`;
    return this.http.delete(url, httpOptions);
  }

  consulterClient(idClient: Client): Observable<Client> {
    const url = `${this.apiURL}/clients/${idClient}`;
    return this.http.get<Client>(url);
  }
  updateClient(client :Client) : Observable<Client> {
    return this.http.put<Client>(`${this.apiURL}/clients`, client, httpOptions);
  }
}
