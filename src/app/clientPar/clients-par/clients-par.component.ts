import { Component, OnInit } from '@angular/core';
import { ClientPar } from 'src/app/model/clientpar.model';
import { ClientParService } from 'src/app/service/client-par.service';

@Component({
  selector: 'app-clients-par',
  templateUrl: './clients-par.component.html',
  styleUrls: ['./clients-par.component.css']
})
export class ClientsParComponent implements OnInit {
  clientsPar! : ClientPar[];
  constructor(private clientService : ClientParService) { }

  ngOnInit(): void {
    this.chargerClientsPar();
  }

  chargerClientsPar(){ 
    this.clientService.listeClientPar().subscribe(client => { 
      this.clientsPar = client; 
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
