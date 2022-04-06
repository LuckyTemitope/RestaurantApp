### DOCUMENTATION



Steps to Creating the Projects
1. Install Angular CLI and Create new Project
2. Run and see output
3. Create layout with Bootstrap
4. Add modal to the project
5. Create form in the Modal
6. Add HttpClient to the project
7. Make a Service
8. Create a Model Structure for the Restaurant Data
9. Create Object to Post our Data
10. Create a function to add new Restaurant
11. Create a function to get all the Restaurants
12. Create a function to delete a Restaurant
13. Create a function to edit a Restaurant
14. Setup Login and Signup Components


# To start json-server: npx json-server --watch db.json

########
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBICG6c_5Dlp67odFRDMiMhIYYGep99-6M",
  authDomain: "restaurant-record-app.firebaseapp.com",
  projectId: "restaurant-record-app",
  storageBucket: "restaurant-record-app.appspot.com",
  messagingSenderId: "32404907635",
  appId: "1:32404907635:web:fb7d90e6ca5420ff96ec06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
