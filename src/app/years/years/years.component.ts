import { Component, OnInit } from '@angular/core';
import {Year} from "../../model/year.model";
import {AuthentificationService} from "../../service/authentification.service";
import {YearService} from "../../service/year.service";
import {Client} from "../../model/client.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css']
})
export class YearsComponent implements OnInit {
  years! : Year[];

  constructor(public authService : AuthentificationService,
              public yearService : YearService) { }

  ngOnInit(): void {
    this.chargerYears();
  }


  chargerYears(){
    //this.newClient.years = this.years.find(y => y.idYear == this.newIdYear)!;
    this.yearService.listeYears().subscribe(year => {
      this.years = year;
    });
  }

  supprimerYear(year : Year) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.yearService.supprimerYear(year.idYear).subscribe(() => {
        this.chargerYears();
      });
    }
  }
}
