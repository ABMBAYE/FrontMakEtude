import {Component, OnInit} from '@angular/core';
import {ClientService} from "../service/client.service";
import {Client} from "../model/client.model";
import {ClientParService} from "../service/client-par.service";
import {ActivatedRoute} from "@angular/router";
import {ClientPar} from "../model/clientpar.model";
import {Year} from "../model/year.model";
import {YearService} from "../service/year.service";

@Component({
  selector: 'app-comptabilite',
  templateUrl: './comptabilite.component.html',
  styleUrls: ['./comptabilite.component.css']
})
export class ComptabiliteComponent implements OnInit {
  years! : Year[];
  selectedYear: string = 'All Rentrées';
  clients!: Client[];
  clientsPar!: ClientPar[];
  filteredClients: Client[] = [];
  filteredClientsPar: ClientPar[] = [];
  sommeApayerCF: number = 50000;
  sommeApayerPS: number = 75000;
  sommeApayerAcceptation: number = 50000;
  sommeApayerCFAndPS: number = 25000;
  constructor(private clientService: ClientService, private clientParService: ClientParService,
              private yearService : YearService) {
  }

  ngOnInit(): void {
    this.chargerClients();
    this.chargerClientsPar();
    this.chargerYears();
  }

  chargerClients() {
    this.clientService.listeClients().subscribe(client => {
      this.clients = client;
    });
  }
  chargerClientsPar() {
    this.clientParService.listeClientPar().subscribe(client => {
      this.clientsPar = client;
    });
  }
  chargerYears(){
    this.yearService.listeYears(). subscribe(year => {
      this.years = year;
    });
  }
  filterTableByYear() {
    if (this.selectedYear === 'All Rentrées') {
      this.filteredClients = this.clients;
      this.filteredClientsPar = this.clientsPar;
      //console.log("Bonjour Clients: "+this.filteredClients)
      //console.log("Bonjour Clients Par: "+this.filteredClientsPar)
    }
    else {
      // @ts-ignore
      this.filteredClients = this.clients.filter(client => client.year.idYear === this.selectedYear.idYear);
      console.log("Bonjour Clients : "+this.filteredClients)
      // @ts-ignore
      this.filteredClientsPar = this.clientsPar.filter(clientPar => clientPar.year.idYear === this.selectedYear.idYear);
      //console.log("Bonjour Clients Par: "+this.filteredClientsPar)
    }
  }
//###############################################################//
//######################## CAMPUS FRANCE ########################//
//###############################################################//
  nombreReliquatByYear():number{
    if (this.selectedYear !== 'All Rentrées') {
      // @ts-ignore
      return this.clients.filter(client => client.year.idYear === this.selectedYear.idYear && client.reliquat && client.reliquat ==='Oui').length;
    } else {
      return this.clients.filter(client => client.reliquat && client.reliquat ==='Oui').length;
    }
  }
  sommeAcceptationCFByYear(){
    return this.nombreReliquatByYear()*this.sommeApayerAcceptation;
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
  sommeCFByYear(){
    return this.nombreClientCFByYear()*this.sommeApayerCF;
  }

  sommeTotalCF(){
    return this.sommeCFByYear()+this.sommeAcceptationCFByYear();
  }
//###############################################################//
//######################### PARCOURSUP ##########################//
//###############################################################//
  nombreClientPSByYear():number{
    if (this.selectedYear !== 'All Rentrées') {
      // @ts-ignore
      return this.clientsPar.filter(client => client.year.idYear === this.selectedYear.idYear && client.compteCF && client.compteCF === 'Non').length;
    }
    else {
      return this.clientsPar.filter(client => client.compteCF && client.compteCF === 'Non').length;
    }
  }
  sommePSByYear(){
    return this.nombreClientPSByYear()*this.sommeApayerPS;
  }
  nombreReliquatPSByYear():number{
    if (this.selectedYear !== 'All Rentrées') {
      // @ts-ignore
      return this.clientsPar.filter(client => client.year.idYear === this.selectedYear.idYear && client.reliquat && client.reliquat === 'Oui').length;
    } else {
      return this.clientsPar.filter(client => client.reliquat && client.reliquat ==='Oui').length;
    }
  }
  sommeAcceptationPSByYear(){
    return this.nombreReliquatPSByYear()*this.sommeApayerAcceptation;
  }

  sommeTotalPS(){
    return this.sommePSByYear() + this.sommeAcceptationPSByYear() + this.sommeCFAndPSByYear();
  }
  //###############################################################//
  //########################## CF AND PS ##########################//
  //###############################################################//
  nombreClientCFAndPSByYear():number{
    if (this.selectedYear !== 'All Rentrées') {
      // @ts-ignore
      return this.clientsPar.filter(client => client.year.idYear === this.selectedYear.idYear && client.compteCF && client.compteCF === 'Oui').length;
    }
    else {
      return this.clientsPar.filter(client => client.compteCF && client.compteCF === 'Oui').length;
    }
  }
  sommeCFAndPSByYear(){
    return this.nombreClientCFAndPSByYear()*this.sommeApayerCFAndPS;
  }
}
