// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNBaiyZ3ARXwqtsSAJUCyuWJ6fEmki5es",
  authDomain: "food-recipes-53b1a.firebaseapp.com",
  projectId: "food-recipes-53b1a",
  storageBucket: "food-recipes-53b1a.appspot.com",
  messagingSenderId: "49920604862",
  appId: "1:49920604862:web:5b4941cc07e682bafcbcef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)