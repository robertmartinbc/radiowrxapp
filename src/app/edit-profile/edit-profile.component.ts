import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from '../services/user';
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  createProfileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private afs: AngularFirestore,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {

    }

  // Initiate Reactive Form to create profiles.
  ngOnInit() {
    this.createProfileForm = this.formBuilder.group({
      artistName: ['', Validators.required],
      artistGenre: ['', Validators.required],
      artistInstrument: [Validators.required]
    })
  }

  // Create Profile for each registered User
  async createProfile() {
    const formValue = this.createProfileForm.value;
    const currentUser = this.afAuth.auth.currentUser.uid;

    try {
      await this.afs.doc(`users/${currentUser}`).collection('profiles').add(formValue);
    } catch(err) {
      console.error(err)
    }
    this.router.navigate(['user']);
    console.log(currentUser)
  }
}
