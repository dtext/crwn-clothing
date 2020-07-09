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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err.message)
    }
  }

  return userRef
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
