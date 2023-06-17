import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/client.model';
import { ClientService } from '../../service/client.service';
import { AuthentificationService } from 'src/app/service/authentification.service';
import {Year} from "../../model/year.model";
import {YearService} from "../../service/year.service";
import {Gerant} from "../../model/gerant.model";
import {GerantService} from "../../service/gerant.service";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user.model";
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients! : Client[];
  filteredClients: Client[] = [];
  years! : Year[];
  users! : User[];
  selectedYear: string = 'All Rentrées';

  gerants! : Gerant[];
  constructor(private clientService : ClientService, public authService : AuthentificationService, private userService : UserService,
              public yearService : YearService, private gerantService : GerantService, private router : Router) { }

  ngOnInit(): void {

    this.chargerClients();
    this.chargerYears();
    this.chargerUsers();
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
  chargerUsers(){
    this.userService.listeUsers(). subscribe(user => {
      this.users = user;
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
        this.router.navigate(['clients']);
        //window.location.reload();
      });
  }
  filterClientsByYear() {
    if (this.selectedYear === 'All Rentrées') {
      this.filteredClients = this.clients;
    }
    else {
      // @ts-ignore
      this.filteredClients = this.clients.filter(client => client.year.idYear === this.selectedYear.idYear);
    }
  }
  nombreClientByYear():number{
    if (this.selectedYear !== 'All Rentrées') {
      // @ts-ignore
      return this.clients.filter(client => client.year.idYear === this.selectedYear.idYear).length;
    }
    else {
      return this.clients.length;
    }
  }
  onKeyUp(filterText : string){
    this.filteredClients = this.clients.filter(item => item.nom?.toUpperCase().includes(filterText));
  }
}
