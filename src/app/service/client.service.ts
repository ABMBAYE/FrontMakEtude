import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../model/client.model';
import { BoolList } from '../model/boolean.model';


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
  listeClient(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiURL);
  }

  ajouterClient(client: Client): Observable<Client> { 
    return this.http.post<Client>(this.apiURL, client, httpOptions); 
  }

  supprimerClient(idClient : number) { 
    const url = `${this.apiURL}/${idClient}`; 
    return this.http.delete(url, httpOptions); 
  }

  consulterClient(idClient: number): Observable<Client> { 
    const url = `${this.apiURL}/${idClient}`; 
    return this.http.get<Client>(url); 
  }

  updateClient(client :Client) : Observable<Client> { 
    return this.http.put<Client>(this.apiURL, client, httpOptions);
  }

  rechercherParNom(nom: string):Observable< Client[]> { 
    const url = `${this.apiURL}/clientByName/${nom}`; 
    return this.http.get<Client[]>(url); }
}
