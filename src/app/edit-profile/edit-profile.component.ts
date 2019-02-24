import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
//import { AngularFirestore } from 'angularfire2/firestore';
//import { User } from '../services/user';
import { Router } from "@angular/router";
import { AuthService } from '../shared/services/auth.service';
import { ProfileService } from '../shared/services/profile.service';
//import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public profileService: ProfileService
  ) {

    }

  // Initiate Reactive Form to create profiles.
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.profileForm = this.formBuilder.group({
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

  resetFields() {
    this.profileForm = this.formBuilder.group({
      artistName: new FormControl('', Validators.required ),
      artistGenre: new FormControl('', Validators.required ),
      yearsFormed: new FormControl('', Validators.required ),
      addressOne: new FormControl('', Validators.required ),
      addressTwo: new FormControl('', Validators.required ),
      artistTown: new FormControl('', Validators.required ),
      artistCountry: new FormControl('', Validators.required ),
      postCode: new FormControl('', Validators.required ),
      contactNumber: new FormControl('', Validators.required )
    })
  }
}
