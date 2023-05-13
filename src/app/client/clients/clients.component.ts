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
  years! : Year[];
  gerants! : Gerant[];
  nomClient !: string;
  yearReach !: string;
  nombreDeClient !: number;

  constructor(private clientService : ClientService, public authService : AuthentificationService,
              public yearService : YearService, private gerantService : GerantService) { }

  ngOnInit(): void {
    this.chargerClients();
    this.chargerYears();
    this.chargerGerants();

    console.log("Test Test"+this.nombreDeClient);
    //console.log("Nombre de clients : "+this.clientService.nombreDeClientCF().subscribe());

    console.log("Nombre de clients : "+this.chargerNombreDeClientCF());
  }

  chargerClients(){
    this.clientService.listeClients().subscribe(client => {
      this.clients = client;
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
  chargerNombreDeClientCF(){
    this.clientService.nombreDeClientCF().subscribe(
      data => {
        this.nombreDeClient = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  supprimerClient(client : Client) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.clientService.supprimerClient(client.idClient).subscribe(() => {
        this.chargerClients();
      });
    }
  }
  rechercherParNom(){
    this.clientService.rechercherParNom(this.nomClient).subscribe(clientsFiltred => {
      this.clients = clientsFiltred;
    });
  }
  rechercherParYear() {
    this.clientService.rechercherParYear(this.yearReach).subscribe(
      clientsFiltred =>{
        this.clients = clientsFiltred
    });
  }
}
