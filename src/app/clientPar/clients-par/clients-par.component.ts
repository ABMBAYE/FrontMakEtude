import { Component, OnInit } from '@angular/core';
import { ClientPar } from 'src/app/model/clientpar.model';
import { ClientParService } from 'src/app/service/client-par.service';
import {Year} from "../../model/year.model";
import {YearService} from "../../service/year.service";
import {AuthentificationService} from "../../service/authentification.service";

@Component({
  selector: 'app-clients-par',
  templateUrl: './clients-par.component.html',
  styleUrls: ['./clients-par.component.css']
})
export class ClientsParComponent implements OnInit {
  clientsPar! : ClientPar[];
  years! : Year[];

  constructor(private clientService : ClientParService, public authService : AuthentificationService,
              public yearService : YearService) { }

  ngOnInit(): void {
    this.chargerClientsPar();
    this.chargerYears()
  }

  chargerClientsPar(){
    this.clientService.listeClientPar().subscribe(client => {
      this.clientsPar = client;
    });
  }
  chargerYears(){
    this.yearService.listeYears(). subscribe(year => {
      this.years = year;
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
}
