import { Component, OnInit } from '@angular/core';
import { CdfundsService } from '../shared/services/cdfunds.service';
import { Router, Params } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-my-bands-cd-funds',
  templateUrl: './my-bands-cd-funds.component.html',
  styleUrls: ['./my-bands-cd-funds.component.scss']
})
export class MyBandsCdFundsComponent implements OnInit {
  items: Array<any>;
  hideWhenNoStudent: boolean = false; //Hide albums table if no albums created.
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(
    private cdfundsService: CdfundsService,
    public router: Router,
    private afAuth: AuthService
  ) { }

  ngOnInit() {
    this.getData();
    this.dataState();
  }

  getData() {
    this.cdfundsService.getCdFunds()
    .subscribe(result => {
      this.items = result;
    })
  }

  viewCdFund() {
    this.router.navigate(['view-cd-funds']);
  }

  dataState() {
    this.cdfundsService.getCdFunds().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    })
  }

}
