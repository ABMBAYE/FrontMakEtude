import { Component, OnInit } from '@angular/core';
import {ClientService} from "../service/client.service";
import {ClientParService} from "../service/client-par.service";
import {YearService} from "../service/year.service";
import {Client} from "../model/client.model";
import {ClientPar} from "../model/clientpar.model";
import {Year} from "../model/year.model";

@Component({
  selector: 'app-compta-ps',
  templateUrl: './compta-ps.component.html',
  styleUrls: ['./compta-ps.component.css']
})
export class ComptaPSComponent implements OnInit {
  //COMPTE PARCOURSUP AYANT CCF
  clientsPar!: ClientPar[];
  years! : Year[];
  selectedYear: string = 'All Rentrées';
  sommeApayerCFAndPS: number = 25000;
  sommeApayerAcceptation: number = 50000;

  //COMPTE PARCOURSUP
  sommeApayerPS: number = 75000;
  constructor(private clientParService: ClientParService, private yearService : YearService) { }

  ngOnInit(): void {
    this.chargerClients();
    this.chargerYears();
  }
  chargerClients() {
    this.clientParService.listeClientPar().subscribe(client => {
      this.clientsPar = client;
    });
  }
  chargerYears(){
    this.yearService.listeYears(). subscribe(year => {
      this.years = year;
    });
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
  nombreAcceptationPSByYear():number{
    if (this.selectedYear !== 'All Rentrées') {
      // @ts-ignore
      return this.clientsPar.filter(client => client.year.idYear === this.selectedYear.idYear && client.accepte && client.accepte > 0).length;
    } else {
      return this.clientsPar.filter(client => client.accepte).length;
    }
  }
  nombreAcceptationReliquatPSByYear():number{
    if (this.selectedYear !== 'All Rentrées') {
      // @ts-ignore
      return this.clientsPar.filter(client => client.year.idYear === this.selectedYear.idYear && client.reliquat && client.reliquat === 'Oui').length;
    } else {
      return this.clientsPar.filter(client => client.reliquat && client.reliquat === 'Oui').length;
    }
  }
  sommeAcceptationPSByYear(){
    return this.nombreAcceptationReliquatPSByYear()*this.sommeApayerAcceptation;
  }
  sommePSByYear(){
    return this.nombreClientPSByYear()*this.sommeApayerPS;
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
