import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { } //é onde eu indico as informacoes que eu quero buscar

  ngOnInit() { //corre quando o html ta injetado, as variaveis ja existem no html
  }

}
