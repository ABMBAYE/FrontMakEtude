import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/client.model';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {
  nom! : string;
  clients! : Client[];

  constructor(private clientService : ClientService) { }

  ngOnInit(): void {
  }

  rechercherProds(){ 
    this.clientService.rechercherParNom(this.nom).subscribe(
      prods => { 
        this.clients = prods; 
        console.log(prods)
      }); 
    }

}
