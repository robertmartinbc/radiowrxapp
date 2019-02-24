import { Injectable } from '@angular/core';
//import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
//import { User } from '../services/user';
//import { auth } from 'firebase/app';
//import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
//import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //formData: Profile;

  constructor(
    public db: AngularFirestore
    //public afAuth: AngularFireAuth,
    //public router: Router
  ) { }

  getAvatars() {
    return this.db.collection('/avatar').valueChanges()
  }

  getProfile(profileKey) {
    return this.db.collection('profiles').doc(profileKey).snapshotChanges();
  }

  updateProfile(profileKey, value) {
    //value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('profiles').doc(profileKey).set(value);
  }

  deleteProfile(profileKey){
    return this.db.collection('profiles').doc(profileKey).delete();
  }

  getProfiles() {
    return this.db.collection('profiles').snapshotChanges();
  }

  searchProfiles(searchValue) {
    return this.db.collection('profiles', ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue +'\uf8ff'))
      .snapshotChanges()
  }

  searchProfilesByAge(value){
    return this.db.collection('profiles',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }

  createProfile(value){
    return this.db.collection('profiles').add({
      artistImage: value.artistImage,
      artistName: value.artistName,
      artistGenre: value.artistGenre,
      yearFormed: value.yearFormed,
      addressOne: value.addressOne,
      addressTwo: value.addressTwo,
      artistTown: value.artistTown,
      artistCountry: value.artistCountry,
      postCode: value.postCode,
      contactNumber: value.contactNumber
    })
  }

}
