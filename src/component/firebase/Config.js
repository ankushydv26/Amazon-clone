import firebase  from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyDrywH6b6irwb4FSD4mPkosuXuYC6L8E60",
    authDomain: "amzon-clone-9ae17.firebaseapp.com",
    projectId: "amzon-clone-9ae17",
    storageBucket: "amzon-clone-9ae17.appspot.com",
    messagingSenderId: "756785430853",
    appId: "1:756785430853:web:67db7bde21be153e893e2c"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;