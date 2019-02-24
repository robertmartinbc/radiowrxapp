import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
//import { AngularFirestore } from 'angularfire2/firestore';
//import { User } from '../services/user';
import { Router } from "@angular/router";
//import { AuthService } from '../shared/services/auth.service';
import { ProfileService } from '../shared/services/profile.service';
//import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  profileForm: FormGroup;
  item: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public profileService: ProfileService
  ) {

    }

  // Initiate Reactive Form to create profiles.
  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      this.item = data.payload.data();
      this.item.id = data.payload.id;
      this.createForm();
    })
  }

  createForm() {
    this.profileForm = this.formBuilder.group({
      artistImage: ['', Validators.required ],
      artistName: ['', Validators.required ],
      artistGenre: ['', Validators.required ],
      yearsFormed: ['', Validators.required ],
      addressOne: ['', Validators.required ],
      addressTwo: ['', Validators.required ],
      artistTown: ['', Validators.required ],
      artistCountry: ['', Validators.required ],
      postCode: ['', Validators.required ],
      contactNumber: ['', Validators.required ]
    })
  }

  onSubmit(value) {
    value.image = this.item.image,
    value.artistName = this.item.artistName;
    value.artistGenre = this.item.artistGenre;
    value.yearFormed = this.item.yearFormed;
    value.addressOne = this.item.addressOne;
    value.addressTwo = this.item.addressTwo;
    value.artistTown = this.item.artistTown;
    value.artistCountry = this.item.artistCountry;
    value.postCode = this.item.postCode;
    value.contactNumber = this.item.contactNumber;
    this.profileService.updateProfile(this.item.id, value)
    .then(
      res => {
        this.router.navigate(['/profile']);
      }
    )
  }

  delete() {
    this.profileService.deleteProfile(this.item.id)
    .then(
      res => {
        this.router.navigate(['/profile']);
      },
      err => {
        console.log(err);
      }
    )
  }
}
