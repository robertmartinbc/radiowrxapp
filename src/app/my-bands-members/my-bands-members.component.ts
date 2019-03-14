import { Component, OnInit } from '@angular/core';
import { MembersService } from '../shared/services/members.service';
import { Router, Params } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-my-bands-members',
  templateUrl: './my-bands-members.component.html',
  styleUrls: ['./my-bands-members.component.scss']
})
export class MyBandsMembersComponent implements OnInit {
  items: Array<any>;
  hideWhenNoStudent: boolean = false; //Hide albums table if no albums created.
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(
    private membersService: MembersService,
    public router: Router,
    private afAuth: AuthService
  ) { }

  ngOnInit() {
    this.getData();
    this.dataState();
  }

  getData() {
    this.membersService.getMembers()
    .subscribe(result => {
      this.items = result;
    })
  }

  viewMember() {
    this.router.navigate(['view-member']);
  }

  dataState() {
    this.membersService.getMembers().subscribe(data => {
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
