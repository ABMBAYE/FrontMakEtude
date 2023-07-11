import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BoolList } from 'src/app/model/boolean.model';
import { ClientPar } from 'src/app/model/clientpar.model';
import { ClientParService } from 'src/app/service/client-par.service';
import {Year} from "../../model/year.model";
import {YearService} from "../../service/year.service";
import {Gerant} from "../../model/gerant.model";
import {GerantService} from "../../service/gerant.service";

@Component({
  selector: 'app-update-client-par',
  templateUrl: './update-client-par.component.html',
  styleUrls: ['./update-client-par.component.css']
})
export class UpdateClientParComponent implements OnInit {
  currentClient = new ClientPar();
  listBol: BoolList[];
  updatedId!: number;

  updatedIdYear! : number;

  submitted = false;
  registerForm!: FormGroup;
  years!: Year[];
  gerants!: Gerant[];
  updatedIdGerant! : number;
  constructor(private clientService: ClientParService, private yearService : YearService, private gerantService : GerantService,
              private activatedRoute: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder) {
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

  ngOnInit(): void {
    /*this.clientService.consulterClientPar(this.activatedRoute.snapshot.params['idClientPar']).subscribe(client => {
      this.currentClient = client;
    });
    this.updatedId = this.currentClient.idClientPar;*/

    this.chargerYears();
    this.chargerGerants();
    this.clientService.consulterClientPar(this.activatedRoute.snapshot.params['idClientPar']).subscribe(
      clientPar =>{
        this.currentClient = clientPar;
        this.updatedIdYear = this.currentClient.year.idYear;
        this.updatedIdGerant = this.currentClient.gerant.idGerant;
      });
  }
  chargerYears(){
    this.yearService.listeYears().subscribe(year => {
      this.years = year;
    });
  }
  chargerGerants(){
    this.gerantService.listeGerants().subscribe(g => {
      this.gerants = g;
    });
  }
  get f() {
    return this.registerForm.controls;
  }

  validChamps(): boolean {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return false;
    } else {
      return true;
    }
  }

  updateClientPar() {
    this.currentClient.year = this.years.find(y => y.idYear == this.updatedIdYear)!;
    this.currentClient.gerant = this.gerants.find(g => g.idGerant == this.updatedIdGerant)!;

    if (this.validChamps()) {
      this.clientService.updateClientPar(this.currentClient).subscribe(client => {
        this.router.navigate(['clientsPar']);
      });
    }
  }
  convertToUppercase(event: any) {
    this.currentClient.nom = event.target.value.toUpperCase();
  }
}
