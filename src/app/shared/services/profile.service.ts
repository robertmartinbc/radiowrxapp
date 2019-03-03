import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
//import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private db: AngularFirestore
    //public afAuth: AngularFireAuth,
    //public router: Router
  ) { }

  getAvatars(){
      return this.db.collection('/avatar').valueChanges()
  }

  getProfile(profileKey) {
    return this.db.collection('profiles').doc(profileKey).snapshotChanges();
  }

  updateProfile(profileKey, value) {
    return this.db.collection('profiles').doc(profileKey).set(value);
  }

  deleteProfile(profileKey) {
    return this.db.collection('profiles').doc(profileKey).delete();
  }

  getProfiles() {
    return this.db.collection('profiles').snapshotChanges();
  }

  createProfile(value, avatar) {
    return this.db.collection('profiles').add({
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
