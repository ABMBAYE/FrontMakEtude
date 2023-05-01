import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/client.model';
import { ClientService } from '../../service/client.service';
import { AuthentificationService } from 'src/app/service/authentification.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients! : Client[];
  constructor(private clientService : ClientService, public authService : AuthentificationService) { }

  ngOnInit(): void {
    this.chargerClients();
  }

  chargerClients(){ 
    this.clientService.listeClient().subscribe(client => { 
      this.clients = client; 
    }); 
  }

  supprimerClient(client : Client) { 
    //let conf = confirm("Etes-vous sûr ?"); 
   // if (conf) {
      this.clientService.supprimerClient(client.idClient).subscribe(() => { 
        this.chargerClients(); 
      });
    //}
  }

}
