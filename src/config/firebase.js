// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { productos } from "../data/asyncMock";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAArmSSkXtIMo6F7rH9YcJudv0-haQUXMo",
  authDomain: "tienda-62310.firebaseapp.com",
  projectId: "tienda-62310",
  storageBucket: "tienda-62310.appspot.com",
  messagingSenderId: "563124255918",
  appId: "1:563124255918:web:37dc802271ba54a66d413f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// productos.forEach((prod) => {
//   addDoc(collection(db, "productos"), prod)
//     .then((elem) => console.log(`se agregó el producto id ${elem.id}`))
//     .catch((error) => console.log(error));
// });
