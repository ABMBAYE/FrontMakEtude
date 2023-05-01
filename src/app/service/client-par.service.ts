import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BoolList } from '../model/boolean.model';
import { ClientPar } from '../model/clientpar.model';
import { Observable } from 'rxjs';

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
    return this.http.get<ClientPar[]>(this.apiURL);
  }

  ajouterClientPar(client: ClientPar): Observable<ClientPar> { 
    return this.http.post<ClientPar>(this.apiURL, client, httpOptions); 
  }

  supprimerClientPar(idClient : number) { 
    const url = `${this.apiURL}/${idClient}`; 
    return this.http.delete(url, httpOptions); 
  }

  consulterClientPar(idClient: number): Observable<ClientPar> { 
    const url = `${this.apiURL}/${idClient}`; 
    return this.http.get<ClientPar>(url); 
  }

  updateClientPar(client :ClientPar) : Observable<ClientPar> { 
    return this.http.put<ClientPar>(this.apiURL, client, httpOptions);
  }
}
