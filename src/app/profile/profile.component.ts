import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../service/authentification.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public authService : AuthentificationService) { }

  ngOnInit(): void {
  }

}
