//importing all the tools that we need
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

//import credentials
import { credentials } from "../credentials.js";

//initialize the firebase app by bringing the credential as an object
initializeApp({
    credential:cert(credentials)
});  //this function takes one parameter as an object

export const db = getFirestore(); 
