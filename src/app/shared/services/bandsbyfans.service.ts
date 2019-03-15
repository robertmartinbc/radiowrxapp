import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BandsbyfansService {
  userId: string;

  constructor(
    private afs: AngularFirestore
  ) { }

  getBandsByFan(bandsbyfansKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('bandsbyfans').doc(bandsbyfansKey).snapshotChanges();
  }

  updateBandsByFans(bandsbyfansKey, value) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('bandsbyfans').doc(bandsbyfansKey).set(value);
  }

  deleteBandsByFans(bandsbyfansKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('bandsbyfans').doc(bandsbyfansKey).delete();
  }

  getBandsByFans() {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('bandsbyfans').snapshotChanges();
  }

  createBandsByFans(value) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('bandsbyfans').add({
      chosenCountry: value.chosenCountry,
      chosenTown: value.chosenTown,
      ticketPrice: value.ticketPrice,
      ticketsRequired: value.ticketsRequired,
      bandsbyfansDescription: value.bandsbyfansDescription
    })
  }
}
