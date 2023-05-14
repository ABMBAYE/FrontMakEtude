import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BoolList } from '../model/boolean.model';
import { ClientPar } from '../model/clientpar.model';
import { Observable } from 'rxjs';
import {FormGroup} from "@angular/forms";
import {Client} from "../model/client.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClientParService {
  listBol : BoolList[]

  apiURL: string = 'http://localhost:8080/parcoursup';
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

  listeClientPar(): Observable<ClientPar[]> {
    return this.http.get<ClientPar[]>(this.apiURL+"/clients");
  }

  ajouterClientPar(form: FormGroup): Observable<ClientPar> {
    return this.http.post<ClientPar>(`${this.apiURL}/clients`, form, httpOptions);
  }
  supprimerClientPar(idClient : number) {
    const url = `${this.apiURL}/clients/${idClient}`;
    return this.http.delete(url, httpOptions);
  }

  consulterClientPar(idClient: number): Observable<ClientPar> {
    const url = `${this.apiURL}/clients/${idClient}`;
    return this.http.get<ClientPar>(url);
  }

  updateClientPar(client :ClientPar) : Observable<ClientPar> {
    return this.http.put<ClientPar>(`${this.apiURL}/clients`, client, httpOptions);
  }

  rechercherParNom(nom: string):Observable< ClientPar[]> {
    const url = `${this.apiURL}/clients/reachByName/${nom}`;
    return this.http.get<ClientPar[]>(url);
  }
  rechercherParYear(year : string):Observable<ClientPar[]> {
    const url = `${this.apiURL}/clients/reachByYear/${year}`;
    return this.http.get<ClientPar[]>(url);
  }
  nombreDeClientCF():Observable<number> {
    const url = this.apiURL+"/clients/nombreDeClient";
    return this.http.get<number>(url);
  }
}
