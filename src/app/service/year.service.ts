import { Injectable } from '@angular/core';
import {Year} from "../model/year.model";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Client} from "../model/client.model";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class YearService {
  apiURL: string = 'http://localhost:8080/campusFrance';

  constructor(private http: HttpClient) {
    this.listeYears();
  }

  listeYears(): Observable<Year[]> {
    return this.http.get<Year[]>(`${this.apiURL}/years`);
  }
  ajouterYear(year: Year): Observable<Year> {
    return this.http.post<Year>(`${this.apiURL}/years`, year, httpOptions);
  }

  updateYear(year :Year) : Observable<Year> {
    return this.http.put<Year>(`${this.apiURL}/years`, year, httpOptions);
  }
  consulterYear(idYear: Year): Observable<Year> {
    const url = `${this.apiURL}/years/${idYear}`;
    return this.http.get<Year>(url);
  }

  supprimerYear(idYear : number) {
    const url = `${this.apiURL}/years/${idYear}`;
    return this.http.delete(url, httpOptions);
  }
}
