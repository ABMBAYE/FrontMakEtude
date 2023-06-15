import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Gerant} from "../../model/gerant.model";
import {GerantService} from "../../service/gerant.service";

@Component({
  selector: 'app-add-gerant',
  templateUrl: './add-gerant.component.html',
  styleUrls: ['./add-gerant.component.css']
})
export class AddGerantComponent implements OnInit {
  newGerant = new Gerant();
  gerants! : Gerant[];

  constructor(private gerantService: GerantService, private router: Router) { }

  ngOnInit(): void {
  }

  addGerant() {
    this.gerantService.ajouterGerant(this.newGerant).subscribe(gerant => {
      this.router.navigate(['gerants']);
    });
  }

}
