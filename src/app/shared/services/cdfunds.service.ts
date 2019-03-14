import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CdfundsService {
  userId: string;

  constructor(
    private afs: AngularFirestore
  ) { }

  getCdFund(cdfundKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('cdfunds').doc(cdfundKey).snapshotChanges();
  }

  updateCdFund(cdfundKey, value) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('cdfunds').doc(cdfundKey).set(value);
  }

  deleteCdFund(cdfundKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('cdfunds').doc(cdfundKey).delete();
  }

  getCdFunds() {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('cdfunds').snapshotChanges();
  }

  createCdFund(value) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('cdfunds').add({
      cdfundsTitle: value.cdfundsTitle,
      cdfundsPackage: value.cdfundsPackage,
      expectationDate: value.expectationDate,
      cdfundsDescription: value.cdfundsDescription,
      requiredAmount: value.requiredAmount
    })
  }
}
