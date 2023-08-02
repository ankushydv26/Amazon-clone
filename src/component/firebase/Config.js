import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCpk7KRYYB2f2H1jf6G-MEHZPDN6n5aBsE",
  authDomain: "ashish-ecommerce-e7be3.firebaseapp.com",
  projectId: "ashish-ecommerce-e7be3",
  storageBucket: "ashish-ecommerce-e7be3.appspot.com",
  messagingSenderId: "2888260705",
  appId: "1:2888260705:web:c216e9eec884a382e95e20",
  measurementId: "G-6GJCH14WNF"
  };

  firebase.initializeApp(firebaseConfig);
export default firebase;  


