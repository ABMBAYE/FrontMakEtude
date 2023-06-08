import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/client.model';
import { ClientService } from '../../service/client.service';
import { AuthentificationService } from 'src/app/service/authentification.service';
import {Year} from "../../model/year.model";
import {YearService} from "../../service/year.service";
import {Gerant} from "../../model/gerant.model";
import {GerantService} from "../../service/gerant.service";
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients! : Client[];
  filteredClients: Client[] = [];

  years! : Year[];
  selectedYear: string = 'All Rentrée';

  gerants! : Gerant[];
  nomClient !: string;
  yearReach !: string;
  idYearReach !: number;
  nombreDeClient !: number;
  sommeCF !: number;

  constructor(private clientService : ClientService, public authService : AuthentificationService,
              public yearService : YearService, private gerantService : GerantService) { }

  ngOnInit(): void {

    this.chargerClients();
    this.chargerYears();
    this.chargerGerants();
    //this.nombreDeClientTotalCF();
  }
  chargerClients(){
    this.clientService.listeClients().subscribe(client => {
      this.clients = client;
      this.filteredClients = this.clients;
    });
  }
  chargerYears(){
    this.yearService.listeYears(). subscribe(year => {
      this.years = year;
    });
  }
  chargerGerants(){
    this.gerantService.listeGerants(). subscribe(gerant => {
      this.gerants = gerant;
    });
  }
  supprimerClient(client : Client) {
      this.clientService.supprimerClient(client.idClient).subscribe(() => {
        this.chargerClients();
        window.location.reload();
      });
  }
  rechercherParNom(){
    this.clientService.rechercherParNom(this.nomClient).subscribe(
      clientsFiltred => {
      this.clients = clientsFiltred;
    });
  }
  filterClientsByYear() {
    if (this.selectedYear === 'All Rentrée') {
      this.filteredClients = this.clients;
    }
    else {
      // @ts-ignore
      this.filteredClients = this.clients.filter(client => client.year.idYear === this.selectedYear.idYear);
    }
  }
  /*nombreDeClientTotalCF(){
    this.clientService.nombreDeClientTotalCF().subscribe(
      data => {
        this.nombreDeClient = data;
      });
  }*/

  nombreClientByYear():number{
    if (this.selectedYear !== 'All Rentrée') {
      // @ts-ignore
      return this.clients.filter(client => client.year.idYear === this.selectedYear.idYear).length;
    }
    else {
      return this.clients.length;
    }
  }
}
