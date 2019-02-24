import { Injectable } from '@angular/core';
import { Profile } from '../../shared/profile';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
//import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
//import { User } from '../services/user';
//import { auth } from 'firebase/app';
//import { AngularFireAuth } from "@angular/fire/auth";
//import { AngularFirestore } from '@angular/fire/firestore';
//import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profilesRef: AngularFireList<any>;
  profileRef: AngularFireObject<any>;

  //formData: Profile;

  constructor(
    public db: AngularFireDatabase
    //public afAuth: AngularFireAuth,
    //public router: Router
  ) { }

  //Create Profile
  createProfile(profile: Profile) {
    this.profilesRef.push({
      artistName: profile.artistName,
      artistGenre: profile.artistGenre,
      yearFormed: profile.yearFormed,
      addressOne: profile.addressOne,
      addressTwo: profile.addressTwo,
      artistTown: profile.artistTown,
      artistCountry: profile.artistCountry,
      postCode: profile.postCode,
      contactNumber: profile.contactNumber
      //artistImage: profile.artistImage
    })
  }
  //Fetch Single Profile AngularFireObject
  getProfile(id: string) {
    this.profileRef = this.db.object('profiles-list/' + id);
    return this.profileRef;
  }
  // Fetch Students list
  getProfilesList() {
    this. profilesRef = this.db.list('profiles-list');
    return this.profilesRef;
  }

  //Update Profile object
  updateProfile(profile: Profile) {
    this.profileRef.update({
      artistName: profile.artistName,
      artistGenre: profile.artistGenre,
      yearFormed: profile.yearFormed,
      addressOne: profile.addressOne,
      addressTwo: profile.addressTwo,
      artistTown: profile.artistTown,
      artistCountry: profile.artistCountry,
      postCode: profile.postCode,
      contactNumber: profile.contactNumber
      //artistImage: profile.artistImage
    })
  }

  //Delete Profile object
  deleteProfile(id: string) {
    this.profileRef = this.db.object('profiles-list/' + id);
  }


  /*getAvatars() {
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
  }*/

}
