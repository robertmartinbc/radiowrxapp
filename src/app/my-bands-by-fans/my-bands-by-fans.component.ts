import { Component, OnInit } from '@angular/core';
import { BandsbyfansService } from '../shared/services/bandsbyfans.service';
import { Router, Params } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-my-bands-by-fans',
  templateUrl: './my-bands-by-fans.component.html',
  styleUrls: ['./my-bands-by-fans.component.scss']
})
export class MyBandsByFansComponent implements OnInit {
  items: Array<any>;
  hideWhenNoStudent: boolean = false; //Hide albums table if no albums created.
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(
    private bandsbyfansService: BandsbyfansService,
    public router: Router,
    private afAuth: AuthService
  ) { }

  ngOnInit() {
    this.getData();
    this.dataState();
  }

  getData() {
    this.bandsbyfansService.getBandsByFans()
    .subscribe(result => {
      this.items = result;
    })
  }

  viewBandsByFans() {
    this.router.navigate(['view-bands-by-fans']);
  }

  dataState() {
    this.bandsbyfansService.getBandsByFans().subscribe(data => {
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
