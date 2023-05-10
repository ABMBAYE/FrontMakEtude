import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../model/client.model';
import { ClientService } from '../../service/client.service';
import { BoolList } from 'src/app/model/boolean.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Year} from "../../model/year.model";
import {YearService} from "../../service/year.service";

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  currentClient = new Client();
  listBol : BoolList[];
  updatedId! : number;
  updatedIdYear! : number;
  registerForm!: FormGroup;
  submitted = false;

  years!: Year[];

  constructor(private clientService : ClientService, private yearService : YearService,
    private activatedRoute: ActivatedRoute, private router : Router, private formBuilder: FormBuilder) {
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
      this.listBol = clientService.bools();
    }

  ngOnInit(): void {
    this.yearService.listeYears().subscribe(years => {
      this.years = years;
    });

    this.clientService.consulterClient(this.activatedRoute.snapshot.params['idClient']).subscribe(
      client =>{
        this.currentClient = client;
        this.updatedIdYear = this.currentClient.year.idYear;
    });
    //this.updatedId=this.currentClient.idClient;
    //console.table(this.currentClient);
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
    if(this.validChamps()){
      this.clientService.updateClient(this.currentClient).subscribe(client => {
        this.router.navigate(['clients']);
      });
    }
  }
}
