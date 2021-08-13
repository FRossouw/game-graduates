import firebase from "firebase";
import { environment } from "src/environments/environment";

firebase.initializeApp({
    apiKey: environment.firebaseConfig.apiKey,
    authDomain: environment.firebaseConfig.authDomain,
    projectId: environment.firebaseConfig.projectId,
    //   storageBucket: environment.firebaseConfig.storageBucket
});

export const db = firebase.firestore();