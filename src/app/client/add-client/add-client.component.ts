import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Client } from '../../model/client.model';
import { ClientService } from '../../service/client.service';
import { BoolList } from '../../model/boolean.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Year} from "../../model/year.model";
import {YearService} from "../../service/year.service";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  newClient = new Client();
  listBol: BoolList[];

  registerForm!: FormGroup;
  submitted = false;
  view = false;
  disableDate: boolean = false;

  years!: Year[];
  newIdYear! : number;
  newYear! : Year;


  constructor(private clientService: ClientService, private yearService : YearService,
    private router: Router, private formBuilder: FormBuilder) {
    this.listBol = clientService.bools();

    this.registerForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],

      identifiant: ['', [Validators.required, Validators.pattern(/^(SN\d{2}-)\d{5}$/)]],
      numTel: ['', [Validators.required, Validators.pattern(/^(77|78|70|76)\s\d{3}\s\d{2}\s\d{2}$/)]],

      adresseMail: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail.com$/)]],
      motDePasse: ['', Validators.required],

      paiement: ['', Validators.required],
      soumis: ['', Validators.required],
      dateEntretien: [''],
      entretien: ['', Validators.required],

      acceptation: ['', Validators.required],
      refus: ['', Validators.required],
      yearId: ['']
    });
  }

  ngOnInit() {
    this.yearService.listeYears().subscribe(years => {
      this.years = years;
      if (years.length > 0) {
        this.newClient.year = years[0];
      }
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  validChamps(): boolean {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return false;
    }else{
      return true;
    }
  }

  addClient() {
    if(this.validChamps()){
      this.clientService.ajouterClient(this.registerForm.value).subscribe(client => {
        this.router.navigate(['clients']);
      });
    }
  }

  chargerSoumis(client: Client) {
    if (client.soumis === 'Non') {
      client.paiement = 'Non';
      client.entretien = 'Non';
      this.disableDate = true;
    }else{
      client.paiement = '';
      client.entretien = '';
    }
    client.acceptation = '0';
    client.refus = '0';
  }
  chargerPaiement(client: Client) {
    if(client.paiement === 'Non'){
      client.entretien = 'Non';
    }else{
      client.entretien = '';
    }
    client.acceptation = '0';
    client.refus = '0';
  }
}
