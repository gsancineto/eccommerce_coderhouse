import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDSnFR3LYRTUtvDdv3lbWU4d2gyGBkyT5s",
  authDomain: "ecommerce-sancineto.firebaseapp.com",
  projectId: "ecommerce-sancineto",
  storageBucket: "ecommerce-sancineto.appspot.com",
  messagingSenderId: "992924466986",
  appId: "1:992924466986:web:a7cc668a6b5e885b42a853"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app;
}