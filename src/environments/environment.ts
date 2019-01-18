// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  // Initialize Firebase
  production: false,
  firebase: {
    apiKey: "AIzaSyBb82HWWLtPM2i_anYPWmP45vPeI81B03o",
    authDomain: "radiowrx-app.firebaseapp.com",
    databaseURL: "https://radiowrx-app.firebaseio.com",
    projectId: "radiowrx-app",
    storageBucket: "radiowrx-app.appspot.com",
    messagingSenderId: "354589726180"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
