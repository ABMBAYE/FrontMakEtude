import { Component, OnInit } from '@angular/core';
import { ClientPar } from 'src/app/model/clientpar.model';
import { ClientParService } from 'src/app/service/client-par.service';
import {Year} from "../../model/year.model";
import {YearService} from "../../service/year.service";
import {AuthentificationService} from "../../service/authentification.service";
import {Gerant} from "../../model/gerant.model";
import {GerantService} from "../../service/gerant.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-clients-par',
  templateUrl: './clients-par.component.html',
  styleUrls: ['./clients-par.component.css']
})
export class ClientsParComponent implements OnInit {
  clientsPar! : ClientPar[];
  filteredClientsPar: ClientPar[] = [];
  selectedYear: string = 'All Rentrées';
  years! : Year[];
  gerants! : Gerant[];

  constructor(private clientService : ClientParService, public authService : AuthentificationService,
              private gerantService : GerantService, public yearService : YearService, private router : Router) { }

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
    if(confirm("Etes-vous sûr ?")){
      this.clientService.supprimerClientPar(client.idClientPar).subscribe(() => {
        this.chargerClientsPar();
        this.router.navigate(['clientsPar']);
      });
    }
  }
  filterClientsParByYear() {
    if (this.selectedYear === 'All Rentrée') {
      this.filteredClientsPar = this.clientsPar;
    }
    else {
      // @ts-ignore
      this.filteredClientsPar = this.clientsPar.filter(client => client.year.idYear === this.selectedYear.idYear);
    }
  }

  nombreClientParByYear():number{
    if (this.selectedYear !== 'All Rentrées') {
      // @ts-ignore
      return this.clientsPar.filter(client => client.year.idYear === this.selectedYear.idYear).length;
    }
    else {
      return this.clientsPar.length;
    }
  }
  onKeyUp(filterText : string){
    this.filteredClientsPar = this.clientsPar.filter(item => item.nom?.toUpperCase().includes(filterText));
  }
}
