import { Injectable } from '@angular/core';
import { User } from '../services/user';
import { Profile } from '../services/profile';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; //Save logged in user data
  profileData: any;
  docId: string;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router
  ) {
    /*Save user data into localstorage when logged in and set to null
    when logged out */
    this.afAuth.authState.subscribe(user => {
      if(user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
        console.log("User is logged in!");
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  //Login regsitered user
  async login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      this.router.navigate(['create-profile']);
      this.setUserData(result.user);
    }).catch((error) => {
      alert(error.message);
    })
}

  // Register new user
  async register(email: string, password: string, profile, member, album, song) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      this.sendVerificationEmail();
      this.setUserData(result.user);
      //this.setProfileData(profile, result.user);
      //this.setBandMemberData(member, result.user);
      //this.setBandAlbumData(album, result.user);
      //this.setBandSongData(song, result.user);
    }).catch((error) => {
      alert(error.message);
    })
  }

  // Send verification email
  sendVerificationEmail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
    .then(() => {
      this.router.navigate(['verify-email']);
  })
}

// Reset forgotten password
forgotPassword(passwordResetEmail) {
  return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
  .then(() => {
    alert('Password reset and email sent. Please check your inbox.');
    this.router.navigate(['login']);
  }).catch((error) => {
    alert(error)
  })
}

//Set up user data for login and register feature
setUserData(user) {
  const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  const userData: User = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    emailVerified: user.emailVerified
  }
  return userRef.set(userData, {
    merge: true
  })
}

// SEt Up Band Profile database
setProfileData(profile) {
  this.docId = localStorage.getItem('id');
  const currentUser = this.afAuth.auth.currentUser.uid;
  const profileRef = this.afs.doc(`users/${currentUser}`).collection('profiles').add({
    //artistName: profile.artistName,
    //artistGenre: profile.artistGenre,
    //artistInstrument: profile.artistInstrument
    /*bandName: profile.bandName,
    id: profile.id,
    genre: profile.genre,
    email: profile.email,
    displayName: profile.displayName,
    photoURL: profile.photoURL*/
  });
  console.log(this.docId);
  console.log(profile.artistName);
}

setBandMemberData(user, member) {
  const currentUser = this.afAuth.auth.currentUser.uid;
  const memberRef = this.afs.doc(`users/${currentUser}`).collection('members').add({
    /*bandName: profile.bandName,
    id: profile.id,
    genre: profile.genre,
    email: profile.email,
    displayName: profile.displayName,
    photoURL: profile.photoURL*/
  });
}

setBandAlbumData(user, album) {
  const currentUser = this.afAuth.auth.currentUser.uid;
  const albumRef = this.afs.doc(`users/${currentUser}`).collection('album').add({
    /*bandName: profile.bandName,
    id: profile.id,
    genre: profile.genre,
    email: profile.email,
    displayName: profile.displayName,
    photoURL: profile.photoURL*/
  });
}

setBandSongData(user, song) {
  const currentUser = this.afAuth.auth.currentUser.uid;
  const songRef = this.afs.doc(`users/${currentUser}`).collection('album').doc(currentUser).collection('songs').add({
    /*bandName: profile.bandName,
    id: profile.id,
    genre: profile.genre,
    email: profile.email,
    displayName: profile.displayName,
    photoURL: profile.photoURL*/
  });
}

  // Returns true when user is logged in and email is verified
  get isLoggedIn():boolean {
  const user = JSON.parse(localStorage.getItem('user'));
  return (user !== null);
}

  // Log out user
  logOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['main-page']);
  })
}

}
