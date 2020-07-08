import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCNJOxQA-NcHuWS-wHs9YT1-uH5eYjMKy4",
  authDomain: "crwn-clothing-e43d3.firebaseapp.com",
  databaseURL: "https://crwn-clothing-e43d3.firebaseio.com",
  projectId: "crwn-clothing-e43d3",
  storageBucket: "crwn-clothing-e43d3.appspot.com",
  messagingSenderId: "236045009676",
  appId: "1:236045009676:web:a296438a28019f062b7f29"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
