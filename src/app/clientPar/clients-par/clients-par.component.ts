import { Component, OnInit } from '@angular/core';
import { ClientPar } from 'src/app/model/clientpar.model';
import { ClientParService } from 'src/app/service/client-par.service';
import {Year} from "../../model/year.model";
import {YearService} from "../../service/year.service";
import {AuthentificationService} from "../../service/authentification.service";
import {Gerant} from "../../model/gerant.model";
import {GerantService} from "../../service/gerant.service";

@Component({
  selector: 'app-clients-par',
  templateUrl: './clients-par.component.html',
  styleUrls: ['./clients-par.component.css']
})
export class ClientsParComponent implements OnInit {
  clientsPar! : ClientPar[];
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

    this.clientService.nombreDeClientTotalPS().subscribe(
      data => {
        this.nombreDeClient = data;
      }
    );
  }

  chargerClientsPar(){
    this.clientService.listeClientPar().subscribe(client => {
      this.clientsPar = client;
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
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.clientService.supprimerClientPar(client.idClientPar).subscribe(() => {
        this.chargerClientsPar();
      });
    }
  }

  rechercherParNom(){
    this.clientService.rechercherParNom(this.nomReach).subscribe(clientsFiltred => {
      this.clientsPar = clientsFiltred;
    });
  }
  rechercherParYear() {
    this.clientService.rechercherParYear(this.yearReach).subscribe(
      clientsFiltred =>{
        this.clientsPar = clientsFiltred
      });
  }
}
