import { Component, OnInit } from '@angular/core';
import {Year} from "../model/year.model";
import {Client} from "../model/client.model";
import {ClientPar} from "../model/clientpar.model";
import {ClientService} from "../service/client.service";
import {ClientParService} from "../service/client-par.service";
import {YearService} from "../service/year.service";

@Component({
  selector: 'app-compta-cf',
  templateUrl: './compta-cf.component.html',
  styleUrls: ['./compta-cf.component.css']
})
export class ComptaCFComponent implements OnInit {
  years! : Year[];
  selectedYear: string = 'All Rentrées';
  clients!: Client[];
  client !: Client[];
  filteredClients: Client[] = [];
  //COMPTE CAMPUS FRANCE
  sommeApayerCF: number = 50000;
  sommeApayerAcceptation: number = 50000;

  constructor(private clientService: ClientService, private yearService : YearService) { }

  ngOnInit(): void {
    this.chargerClients();
    this.chargerYears();
  }
  chargerClients() {
    this.clientService.listeClients().subscribe(client => {
      this.clients = client;
    });
  }
  chargerYears(){
    this.yearService.listeYears(). subscribe(year => {
      this.years = year;
    });
  }
  //###############################################################//
  //######################## CAMPUS FRANCE ########################//
  //###############################################################//
  filterClientsByYear() {
    if (this.selectedYear === 'All Rentrées') {
      this.filteredClients = this.clients;
    }
    else {
      // @ts-ignore
      this.filteredClients = this.clients.filter(client => client.year.idYear === this.selectedYear.idYear);
    }
  }
  nombreClientCFByYear():number{
    if (this.selectedYear !== 'All Rentrées') {
      // @ts-ignore
      return this.clients.filter(client => client.year.idYear === this.selectedYear.idYear).length;
    }
    else {
      return this.clients.length;
    }
  }
  nombreAcceptationByYear():number{
    if (this.selectedYear !== 'All Rentrées') {
      // @ts-ignore
      return this.clients.filter(client => client.year.idYear === this.selectedYear.idYear && client.acceptation && client.acceptation > 0).length;
    } else {
      return this.clients.filter(client => client.acceptation && client.acceptation > 0).length;
    }
  }

  nombreAcceptationReliquatByYear():number{
    if (this.selectedYear !== 'All Rentrées') {
      // @ts-ignore
      return this.clients.filter(client => client.year.idYear === this.selectedYear.idYear && client.reliquat && client.reliquat ==='Oui').length;
    } else {
      return this.clients.filter(client => client.reliquat && client.reliquat === 'Oui').length;
    }
  }
  sommeAcceptationCFByYear(){
    return this.nombreAcceptationReliquatByYear()*this.sommeApayerAcceptation;
  }
  sommeCFByYear(){
      return this.nombreClientCFByYear()*this.sommeApayerCF;
  }
}
