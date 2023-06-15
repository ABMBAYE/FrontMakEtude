import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Gerant} from "../model/gerant.model";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class GerantService {
  apiURL: string = 'http://localhost:8080/campusFrance';

  constructor(private http: HttpClient) {
    this.listeGerants();
  }

  listeGerants(): Observable<Gerant[]> {
    return this.http.get<Gerant[]>(`${this.apiURL}/gerants`);
  }
  ajouterGerant(gerant: Gerant): Observable<Gerant> {
    return this.http.post<Gerant>(`${this.apiURL}/gerants`, gerant, httpOptions);
  }

  updateGerant(gerant :Gerant) : Observable<Gerant> {
    return this.http.put<Gerant>(`${this.apiURL}/gerants`, gerant, httpOptions);
  }
  consulterGerant(idGerant: Gerant): Observable<Gerant> {
    const url = `${this.apiURL}/gerants/${idGerant}`;
    return this.http.get<Gerant>(url);
  }
  supprimerGerant(idGerant : number) {
    const url = `${this.apiURL}/gerants/${idGerant}`;
    return this.http.delete(url, httpOptions);
  }
}
