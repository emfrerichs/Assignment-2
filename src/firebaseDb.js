import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBmsds3lxKLVJTOkDKS4PkfZ23FjmSEAgE",
  authDomain: "my-subscriptions-c65da.firebaseapp.com",
  databaseURL: "https://my-subscriptions-c65da.firebaseio.com",
  projectId: "my-subscriptions-c65da",
  storageBucket: "my-subscriptions-c65da.appspot.com",
  messagingSenderId: "825220337855",
  appId: "1:825220337855:web:4390e9a7542c1ef9c2b60a"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()



