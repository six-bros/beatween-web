import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyADfwLo1IS5Sy1pQD3OngNrqT83XzKI-zk',
  authDomain: 'beatween-1c7e8.firebaseapp.com',
  databaseURL: 'https://beatween-1c7e8.firebaseio.com',
  projectId: 'beatween-1c7e8',
  storageBucket: 'beatween-1c7e8.appspot.com',
  messagingSenderId: '655771021208'
}

const firebaseApp = firebase.initializeApp(config)
export const fbStorage = firebaseApp.storage()
