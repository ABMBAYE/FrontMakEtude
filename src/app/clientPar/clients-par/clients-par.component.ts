import { Component, OnInit } from '@angular/core';
import { ClientPar } from 'src/app/model/clientpar.model';
import { ClientParService } from 'src/app/service/client-par.service';
import {Year} from "../../model/year.model";
import {YearService} from "../../service/year.service";
import {AuthentificationService} from "../../service/authentification.service";
import {Gerant} from "../../model/gerant.model";
import {GerantService} from "../../service/gerant.service";
import {Client} from "../../model/client.model";

@Component({
  selector: 'app-clients-par',
  templateUrl: './clients-par.component.html',
  styleUrls: ['./clients-par.component.css']
})
export class ClientsParComponent implements OnInit {
  clientsPar! : ClientPar[];
  filteredClientsPar: ClientPar[] = [];
  selectedYear: string = 'All Rentrée';
  years! : Year[];
  gerants! : Gerant[];
  nomReach !: string;
  yearReach !: string;
  nombreDeClient !: number;

  constructor(private clientService : ClientParService, public authService : AuthentificationService,
              private gerantService : GerantService, public yearService : YearService) { }

  ngOnInit(): void {
    this.chargerClientsPar();
    this.chargerYears();
    this.chargerGerants();

    //this.nombreDeClientTotalPS();
  }

  chargerClientsPar(){
    this.clientService.listeClientPar().subscribe(client => {
      this.clientsPar = client;
      this.filteredClientsPar = this.clientsPar;
    });
  }
  chargerYears(){
    this.yearService.listeYears().subscribe(year => {
      this.years = year;
    });
  }

  chargerGerants(){
    this.gerantService.listeGerants().subscribe(gerant => {
      this.gerants = gerant;
    });
  }

  supprimerClientPar(client : ClientPar) {
      this.clientService.supprimerClientPar(client.idClientPar).subscribe(() => {
        this.chargerClientsPar();
        window.location.reload();
      });
  }

  rechercherParNom(){
    this.clientService.rechercherParNom(this.nomReach).subscribe(clientsFiltred => {
      this.clientsPar = clientsFiltred;
    });
  }
  filterClientsParByYear() {
    console.log("Entrée ?")
    if (this.selectedYear === 'All Rentrée') {
      this.filteredClientsPar = this.clientsPar;
      console.log("Entrée 1 :"+this.filteredClientsPar)
    }
    else {
      // @ts-ignore
      this.filteredClientsPar = this.clientsPar.filter(client => client.year.idYear === this.selectedYear.idYear);
      console.log("Entrée 2 :"+this.filteredClientsPar)
    }
  }

  nombreClientParByYear():number{
    if (this.selectedYear !== 'All Rentrée') {
      // @ts-ignore
      return this.clientsPar.filter(client => client.year.idYear === this.selectedYear.idYear).length;
    }
    else {
      return this.clientsPar.length;
    }
  }
}
