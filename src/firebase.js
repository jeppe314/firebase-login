import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDsxiX6C33nIh9S4Z6rGdZojVoxuBhLIhM",

  authDomain: "logintest-8f9eb.firebaseapp.com",

  projectId: "logintest-8f9eb",

  storageBucket: "logintest-8f9eb.appspot.com",

  messagingSenderId: "584753957957",

  appId: "1:584753957957:web:21b97116b7a426ab97672c",
}

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
