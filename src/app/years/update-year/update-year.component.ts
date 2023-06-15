import { Component, OnInit } from '@angular/core';
import {YearService} from "../../service/year.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Year} from "../../model/year.model";

@Component({
  selector: 'app-update-year',
  templateUrl: './update-year.component.html',
  styleUrls: ['./update-year.component.css']
})
export class UpdateYearComponent implements OnInit {
  currentYear = new Year();
  updatedId!: number;
  constructor(private yearService : YearService, private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.yearService.consulterYear(this.activatedRoute.snapshot.params['idYear']).subscribe(year =>{
        this.currentYear = year;
      });
    this.updatedId = this.currentYear.idYear;
  }
  updateYear() {
      this.yearService.updateYear(this.currentYear).subscribe(year => {
        this.router.navigate(['years']);
      });
  }
}
