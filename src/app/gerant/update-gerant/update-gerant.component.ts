import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Gerant} from "../../model/gerant.model";
import {GerantService} from "../../service/gerant.service";

@Component({
  selector: 'app-update-gerant',
  templateUrl: './update-gerant.component.html',
  styleUrls: ['./update-gerant.component.css']
})
export class UpdateGerantComponent implements OnInit {
  currentGerant = new Gerant();
  updatedId!: number;
  constructor(private gerantService : GerantService, private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.gerantService.consulterGerant(this.activatedRoute.snapshot.params['idGerant']).subscribe(year =>{
      this.currentGerant = year;
    });
    this.updatedId = this.currentGerant.idGerant;
  }
  updateGerant() {
    this.gerantService.updateGerant(this.currentGerant).subscribe(gerant => {
      this.router.navigate(['gerants']);
    });
  }
}
