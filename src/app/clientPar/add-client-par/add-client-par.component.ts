import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BoolList } from 'src/app/model/boolean.model';
import { ClientPar } from 'src/app/model/clientpar.model';
import { ClientParService } from 'src/app/service/client-par.service';
import {Year} from "../../model/year.model";
import {YearService} from "../../service/year.service";

@Component({
  selector: 'app-add-client-par',
  templateUrl: './add-client-par.component.html',
  styleUrls: ['./add-client-par.component.css']
})
export class AddClientParComponent implements OnInit {
  newClientPar = new ClientPar();
  listBol: BoolList[]
  submitted = false;
  registerForm!: FormGroup;
  showDiv = false;
  years!: Year[];

  constructor(private clientService: ClientParService, private yearService : YearService,
    private router: Router, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],

      motDePasse: ['', Validators.required],
      adresseMail: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail.com$/)]],

      numDossier: ['', [Validators.required, Validators.pattern(/\d{7}$/)]],
      numTel: ['', [Validators.required, Validators.pattern(/^(77|78|70|76)\s\d{3}\s\d{2}\s\d{2}$/)]],

      compteCF: ['', Validators.required],
      inscription: ['', Validators.required],
      formulation: ['', Validators.required],
      confirmation: ['', Validators.required],

      attente: ['', Validators.required],
      refus: ['', Validators.required],
      accepte: ['', Validators.required],

      yearId: ['']

    });
    this.listBol = clientService.bools();
  }

  ngOnInit() {
    this.yearService.listeYears().subscribe(years => {
      this.years = years;
      if (years.length > 0) {
        this.newClientPar.year = years[0];
      }
    });
  }
  get f() { return this.registerForm.controls; }

  validChamps(): boolean {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return false;
    } else {
      return true;
    }
  }

  addClientPar() {
    if (this.validChamps()) {
      this.clientService.ajouterClientPar(this.registerForm.value).subscribe(client => {
        this.router.navigate(['clientsPar']);
      });
    }
  }

  charger(client: ClientPar) {
    if (client.inscription === 'Non') {
      //this.showDiv = true;

      client.formulation = 'Non';
      client.confirmation = 'Non';
      client.attente = '0';
      client.refus = '0';
      client.accepte = '0';
    }
  }

}
