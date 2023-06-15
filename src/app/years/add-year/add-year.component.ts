import { Component, OnInit } from '@angular/core';
import {Client} from "../../model/client.model";
import {Year} from "../../model/year.model";
import {ClientService} from "../../service/client.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {YearService} from "../../service/year.service";

@Component({
  selector: 'app-add-years',
  templateUrl: './add-year.component.html',
  styleUrls: ['./add-year.component.css']
})
export class AddYearComponent implements OnInit {
  newYear = new Year();
  years! : Year[];

  constructor(private yearService: YearService, private router: Router) { }

  ngOnInit(): void {
  }

  addYear() {
    this.yearService.ajouterYear(this.newYear).subscribe(year => {
      this.router.navigate(['years']);
    });
  }
}
