import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  userId: string;

  constructor(
    private afs: AngularFirestore
  ) { }

  getSong(songKey) {
    this.userId = localStorage.getItem('user');
    let ref = this.afs.collection('users').doc(this.userId).collection('albums').ref.doc().id;
    return this.afs.collection('users').doc(this.userId).collection('albums').doc(ref).collection(ref).doc(songKey).snapshotChanges();
  }

  updateSong(songKey, value) {
    this.userId = localStorage.getItem('user');
    let ref = this.afs.collection('users').doc(this.userId).collection('albums').ref.doc().id;
    return this.afs.collection('users').doc(this.userId).collection('albums').doc(ref).collection('songs').doc(songKey).set(value);
  }

  deleteSong(songKey) {
    this.userId = localStorage.getItem('user');
    let ref = this.afs.collection('users').doc(this.userId).collection('albums').ref.doc().id;
    return this.afs.collection('users').doc(this.userId).collection('albums').doc(ref).collection('songs').doc(songKey).delete();
  }

  getSongs() {
    this.userId = localStorage.getItem('user');
    const ref = this.afs.collection('users').doc(this.userId).collection('albums').ref.doc().id;
    console.log(ref);
    return this.afs.collection('users').doc(this.userId).collection('albums').doc(ref).collection('songs').snapshotChanges();
  }

  createSong(value) {
    this.userId = localStorage.getItem('user');
    let ref = this.afs.collection('users').doc(this.userId).collection('albums').ref.doc().id;
    return this.afs.collection('users').doc(this.userId).collection('albums').doc(ref).collection('songs').add({
      songTitle: value.songTitle,
      songNumber: value.songNumber,
      songWriters: value.songWriters,
      durationSeconds: value.durationSeconds,
      durationMinutes: value.durationMinutes,
      publisher: value.publisher,
      bundleName: value.bundleName,
      labelName: value.labelName,
      productCatalogueNumber: value.productCatalogueNumber,
      discNumber: value.discNumber,
      grid: value.grid,
      isrcCode: value.isrcCode,
      iswcCode: value.iswcCode,
      bundleundleId: value.bundleId,
      productName: value.productName,
      description: value.description
    })
  }
}
