import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { ProfileService } from '../shared/services/profile.service';
import { Profile } from '../shared/profile';
import { Router, Params } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  Profile: Profile[];
  hideWhenNoProfile: boolean = false;
  noData: boolean = false;

  constructor(
    public profileService: ProfileService,
    public router: Router,
    public afAuth: AuthService
  ) { }

  ngOnInit() {
    this.dataState();
    let s = this.profileService.getProfilesList();
    s.snapshotChanges().subscribe(data => {
      this.Profile = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Profile.push(a as Profile);
      })
    })
  }

  dataState() {
    this.profileService.getProfilesList().valueChanges().subscribe(data => {
      if(data.length <= 0) {
        this.hideWhenNoProfile = false;
        this.noData = true;
      } else {
        this.hideWhenNoProfile = true;
        this.noData = false;
      }
    })
  }

  // Delete Profile object
  deleteStudent(profile) {
  if(window.confirm("Are you sure you want to delete this profile?")) {
    this.profileService.deleteProfile(profile.$key)
    }
  }

  logOut() {
    this.afAuth.logOut();
  }
  /*getData() {
    this. profileService.getProfiles()
    .subscribe(result => {
      this.items = result;
    })
  }

  editProfile(item) {
    this.router.navigate(['/details/' + item.payload.doc.id])
  }*/

}
