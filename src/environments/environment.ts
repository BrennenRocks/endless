// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  blizz: 'Put your blizzard API key here',
  firebase: {
    apiKey: "AIzaSyCoKd5Ez2VY4cIwumfRy5ogAyKvlBAUk14",
    authDomain: "endlessdev-21d15.firebaseapp.com",
    databaseURL: "https://endlessdev-21d15.firebaseio.com",
    projectId: "endlessdev-21d15",
    storageBucket: "endlessdev-21d15.appspot.com",
    messagingSenderId: "846360209190"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
