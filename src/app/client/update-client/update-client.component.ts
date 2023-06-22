import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../model/client.model';
import { ClientService } from '../../service/client.service';
import { BoolList } from 'src/app/model/boolean.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Year} from "../../model/year.model";
import {YearService} from "../../service/year.service";
import {Gerant} from "../../model/gerant.model";
import {GerantService} from "../../service/gerant.service";

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  currentClient = new Client();
  listBol : BoolList[];
  updatedIdYear! : number;
  updatedIdGerant! : number;
  registerForm!: FormGroup;
  submitted = false;

  years!: Year[];
  gerants!: Gerant[];

  constructor(private clientService : ClientService, private yearService : YearService,private gerantService : GerantService,
    private activatedRoute: ActivatedRoute, private router : Router, private formBuilder: FormBuilder) {
      this.registerForm = this.formBuilder.group({
        prenom: ['', Validators.required],
        nom: ['', Validators.required],

        reliquat: ['', Validators.required],

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

        yearId: [''],
        gerantId: [''],
      });
      this.listBol = clientService.bools();
    }

  ngOnInit(): void {
    this.chargerYears();
    this.chargerGerants();
    this.chargerClients();
    //this.updatedId=this.currentClient.idClient;
    //console.table(this.currentClient);
  }
chargerClients(){
  this.clientService.consulterClient(this.activatedRoute.snapshot.params['idClient']).subscribe(
    client =>{
      this.currentClient = client;
      this.updatedIdYear = this.currentClient.year.idYear;
      this.updatedIdGerant = this.currentClient.gerant.idGerant;
    });
}
chargerYears(){
  this.yearService.listeYears().subscribe(years => {
    this.years = years;
  });
}
chargerGerants(){
  this.gerantService.listeGerants().subscribe(gerants => {
    this.gerants = gerants;
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

  updateClient() {
    this.currentClient.year = this.years.find(y => y.idYear == this.updatedIdYear)!;
    this.currentClient.gerant = this.gerants.find(g => g.idGerant == this.updatedIdGerant)!;
    if(this.validChamps()){
      this.clientService.updateClient(this.currentClient).subscribe(client => {
        this.router.navigate(['clients']);
      });
    }
  }
}
