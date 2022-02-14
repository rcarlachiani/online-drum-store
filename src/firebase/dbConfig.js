import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAynRYROfFpMpjfy3cEMj7UO_Jp2vPnfc8",
  authDomain: "proyecto-final-reactjs-coder.firebaseapp.com",
  projectId: "proyecto-final-reactjs-coder",
  storageBucket: "proyecto-final-reactjs-coder.appspot.com",
  messagingSenderId: "619606536221",
  appId: "1:619606536221:web:6c53e0d776a079d8bd16f4"
};

const app = initializeApp(firebaseConfig);

export const getFiresotreApp = () => {
    return app
}