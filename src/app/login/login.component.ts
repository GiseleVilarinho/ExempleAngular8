import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from 'src/environments/account-service teste';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public account: Account = new Account();


  constructor(
    private accountService: AccountServiceService,
    private router: Router

  ) { } //é onde eu indico as informacoes que eu quero buscar

  ngOnInit() { //corre quando o html ta injetado, as variaveis ja existem no html
  }

  public login() {
    this.accountService.login(this.account);
    this.router.navigate (['/']);
}
}