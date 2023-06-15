import { Component, OnInit } from '@angular/core';
import {ClientService} from "../service/client.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-infosclient',
  templateUrl: './infosclient.component.html',
  styleUrls: ['./infosclient.component.css']
})
export class InfosclientComponent implements OnInit {
  client: any;
  constructor(private route: ActivatedRoute, private clientService : ClientService) { }

  ngOnInit(): void {
    const identifiant = this.route.snapshot.paramMap.get('identifiant');
    this.clientService.getClientByIdentifiant(identifiant)
      .subscribe((data: any) => {
        this.client = data;
      });
  }

}
