import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../model/client.model';
import { ClientService } from '../../service/client.service';
import { BoolList } from 'src/app/model/boolean.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  currentClient = new Client();
  listBol : BoolList[];
  updatedId! : number;

  registerForm!: FormGroup;
  submitted = false;

  constructor(private clientService : ClientService, 
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
        dateEntretien: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],


        entretien: ['', Validators.required],
  
        acceptation: ['', Validators.required],
        refus: ['', Validators.required]
      });
      this.listBol = clientService.bools();
    }

  ngOnInit(): void {
    this.clientService.consulterClient(this.activatedRoute.snapshot.params['idClient']).subscribe( client =>{ 
      this.currentClient = client;
    });
    this.updatedId=this.currentClient.idClient;
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
    if(this.validChamps()){
      this.clientService.updateClient(this.currentClient).subscribe(client => { 
        this.router.navigate(['clients']); } ); 
    }
  }

}
