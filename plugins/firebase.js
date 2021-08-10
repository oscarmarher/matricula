import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyCLkWG-6QAIY49FSJBrd-lSK9XO_mXiX7Y",
        authDomain: "prueba-a1b42.firebaseapp.com",
        databaseURL: "https://prueba-a1b42-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "prueba-a1b42",
        storageBucket: "prueba-a1b42.appspot.com",
        messagingSenderId: "815941347421",
        appId: "1:815941347421:web:e722c0c19f3cab914885b4",
        measurementId: "G-PCSQYMQ9RV"
    }
    firebase.initializeApp(config)
    firebase.firestore().settings({timestampsInSnapshots: true})
}
const db = firebase.firestore()
export {db}