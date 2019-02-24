import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../services/auth.service';
import { ProfileService } from '../shared/services/profile.service';
import { Router, Params } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  items: Array<any>

  constructor(
    public profileService: ProfileService,
    public router: Router
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this. profileService.getProfiles()
    .subscribe(result => {
      this.items = result;
    })
  }

  editProfile(item) {
    this.router.navigate(['/details/' + item.payload.doc.id])
  }

}
