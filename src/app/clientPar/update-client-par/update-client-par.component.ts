import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BoolList } from 'src/app/model/boolean.model';
import { ClientPar } from 'src/app/model/clientpar.model';
import { ClientParService } from 'src/app/service/client-par.service';

@Component({
  selector: 'app-update-client-par',
  templateUrl: './update-client-par.component.html',
  styleUrls: ['./update-client-par.component.css']
})
export class UpdateClientParComponent implements OnInit {
  currentClient = new ClientPar();
  listBol: BoolList[];
  updatedId!: number;
  submitted = false;
  registerForm!: FormGroup;

  constructor(private clientService: ClientParService, private activatedRoute: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],

      motDePasse: ['', Validators.required],
      adresseMail: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail.com$/)]],

      numDossier: ['', [Validators.required, Validators.pattern(/^(SN\d{2}-)\d{5}$/)]],
      numTel: ['', [Validators.required, Validators.pattern(/^(77|78|70|76)\s\d{3}\s\d{2}\s\d{2}$/)]],

      compteCF: ['', Validators.required],
      inscription: ['', Validators.required],
      formulation: ['', Validators.required],
      confirmation: ['', Validators.required],

      attente: ['', Validators.required],
      refus: ['', Validators.required],
      accepte: ['', Validators.required]
    });
    this.listBol = clientService.bools();
  }

  ngOnInit(): void {
    this.clientService.consulterClientPar(this.activatedRoute.snapshot.params['idClientPar']).subscribe(client => {
      this.currentClient = client;
    });
    this.updatedId = this.currentClient.idClientPar;
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

  updateClientPar() {
    if (this.validChamps()) {
      this.clientService.updateClientPar(this.currentClient).subscribe(client => {
        this.router.navigate(['clientsPar']);
      });
    }
  }
}