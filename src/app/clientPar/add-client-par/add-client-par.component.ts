import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BoolList } from 'src/app/model/boolean.model';
import { ClientPar } from 'src/app/model/clientpar.model';
import { ClientParService } from 'src/app/service/client-par.service';
import {Year} from "../../model/year.model";
import {YearService} from "../../service/year.service";
import {GerantService} from "../../service/gerant.service";
import {Gerant} from "../../model/gerant.model";

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
  gerants!: Gerant[];

  constructor(private clientService: ClientParService, private yearService : YearService,
              private gerantService : GerantService, private router: Router, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      reliquat: ['', Validators.required],

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

      yearId: [''],
      gerantId: ['']

    });
    this.listBol = clientService.bools();
  }

  ngOnInit() {
    this.chargerYears();
    this.chargerGerants();
  }
  chargerYears(){
    this.yearService.listeYears().subscribe(years => {
      this.years = years;
      if (years.length > 0) {
        this.newClientPar.year = years[0];
      }
    });
  }
  chargerGerants(){
    this.gerantService.listeGerants().subscribe(gerants => {
      this.gerants = gerants;
      if (gerants.length > 0) {
        this.newClientPar.gerant = gerants[0];
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

  chargerInscription(client: ClientPar) {
    if (client.inscription === 'Non') {
      client.formulation = 'Non';
      client.confirmation = 'Non';
    }else{
      client.formulation = '';
      client.confirmation = '';
    }
    client.reliquat = 'Non';
    client.attente = 0;
    client.refus = 0;
    client.accepte = 0;
  }
  chargerFormulation(client: ClientPar) {
    if (client.formulation === 'Non') {
      client.confirmation = 'Non';
    }else{
      client.confirmation = '';
    }
    client.reliquat = 'Non';
    client.attente = 0;
    client.refus = 0;
    client.accepte = 0;
  }

}
