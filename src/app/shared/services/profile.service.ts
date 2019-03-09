import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
//import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userId: string;

  constructor(
    private db: AngularFirestore
    //public afAuth: AngularFireAuth,
    //public router: Router
  ) { }

  getAvatars(){
      return this.db.collection('/avatar').valueChanges()
  }

  getProfile(profileKey) {
    this.userId = localStorage.getItem('user');
    return this.db.collection('users').doc(this.userId).collection('profiles').doc(profileKey).snapshotChanges();
  }

  updateProfile(profileKey, value) {
    this.userId = localStorage.getItem('user');
    return this.db.collection('users').doc(this.userId).collection('profiles').doc(profileKey).set(value);
  }

  deleteProfile(profileKey) {
    return this.db.collection('profiles').doc(profileKey).delete();
  }

  getProfiles() {
    this.userId = localStorage.getItem('user');
    return this.db.collection('users').doc(this.userId).collection('profiles').snapshotChanges();
  }

  createProfile(value) {
    this.userId = localStorage.getItem('user');
    return this.db.collection('users').doc(this.userId).collection('profiles').add({
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
