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

  }

  /*getSong(songKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('albums').doc().collection('songs').doc(songKey).snapshotChanges();
  }

  updateAlbum(songKey) {
    this.userId = localStorage.getItem('user');
    return this.afs.collection('users').doc(this.userId).collection('albums').doc().collection('songs').doc(songKey).set(value);
  }*/
}
