import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../../service/authentification.service";
import {Gerant} from "../../model/gerant.model";
import {GerantService} from "../../service/gerant.service";

@Component({
  selector: 'app-gerants',
  templateUrl: './gerants.component.html',
  styleUrls: ['./gerants.component.css']
})
export class GerantsComponent implements OnInit {
  gerants! : Gerant[];

  constructor(public authService : AuthentificationService,
              public gerantService : GerantService) { }

  ngOnInit(): void {
    this.chargerGerants();
  }


  chargerGerants(){
    //this.newClient.years = this.years.find(y => y.idYear == this.newIdYear)!;
    this.gerantService.listeGerants().subscribe(gerant => {
      this.gerants = gerant;
    });
  }

  supprimerGerant(gerant : Gerant) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.gerantService.supprimerGerant(gerant.idGerant).subscribe(() => {
        this.chargerGerants();
      });
    }
  }
}
