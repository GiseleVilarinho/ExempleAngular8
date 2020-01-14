import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public name: string;

  constructor(
    private accountService: AccountServiceService
  ) { 
    this.name=accountService.getCurrentName();
  }


  ngOnInit() {
  }

}
