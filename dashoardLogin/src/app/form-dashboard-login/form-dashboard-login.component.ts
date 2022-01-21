import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-dashboard-login',
  templateUrl: './form-dashboard-login.component.html',
  styleUrls: ['./form-dashboard-login.component.css']
})
export class FormDashboardLoginComponent implements OnInit {
  email!: string;
  password!: string;

  constructor() { }

  ngOnInit(): void {
  }

  validerForm() {
    console.log("adresse email saisie : " + this.email);
  }
}
