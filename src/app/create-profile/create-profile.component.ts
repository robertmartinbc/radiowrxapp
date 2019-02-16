import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../services/user';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";



@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {

  createProfileForm: FormGroup;
  submitted = false;

  //Form statement
  loading = false;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private afs: AngularFirestore,
    private router: Router,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.createProfileForm = this.formBuilder.group({
      artistName: ['', Validators.required],
      artistGenre: ['', Validators.required],
      yearFormed: ['', Validators.required],
      addressOne: ['', Validators.required],
      addressTwo: ['', Validators.required],
      artistTown: ['', Validators.required],
      artistCountry: ['', Validators.required],
      postCode: ['', Validators.required],
      contactNumber: ['', Validators.required]
    })
  }

  // Covenience getters for easy acceess to form fields
  get artistName() {
    return this.createProfileForm.get('artistName');
  }

  get artistGenre() {
    return this.createProfileForm.get('artistGenre');
  }

  get yearFormed() {
    return this.createProfileForm.get('yearFormed');
  }

  get addressOne() {
    return this.createProfileForm.get('addressOne');
  }

  get ddressTwo() {
    return this.createProfileForm.get('addressTwo');
  }

  get artistTown() {
    return this.createProfileForm.get('artistTown');
  }

  get artistCountry() {
    return this.createProfileForm.get('artistCountry');
  }

  get postCode() {
    return this.createProfileForm.get('postCode');
  }

  get contactNumber() {
    return this.createProfileForm.get('contactNumber');
  }

  //Submit data to create profile
  async submitHandler() {
    this.loading = true;

    const formValue = this.createProfileForm.value;
    const currentUser = this.afAuth.auth.currentUser.uid;

    try {
      await this.afs.doc(`users/${currentUser}`).collection('profiles').add(formValue);
      this.success = true;
    } catch(err) {
      console.error(err)
    }
    this.loading = false;
  }

  // Create Profile for each registered User
  /*onSubmit() {
    this.submitted = true;
    //const formValue = this.createProfileForm.value;
    //const currentUser = this.afAuth.auth.currentUser.uid;

    // stop here if form is invalid
    if (this.createProfileForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.createProfileForm.value))

    /*try {
      this.afs.doc(`users/${currentUser}`).collection('profiles').add(formValue);
    } catch(err) {
      console.error(err)
    }
    this.router.navigate(['profile']);
    console.log(currentUser)*/
  }
