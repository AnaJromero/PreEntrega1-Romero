import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB_9ss71G_AE23THKKjRiTSYN-Tg8SJjg",
  authDomain: "yellowtruck-a159a.firebaseapp.com",
  projectId: "yellowtruck-a159a",
  storageBucket: "yellowtruck-a159a.appspot.com",
  messagingSenderId: "295622426204",
  appId: "1:295622426204:web:60bdcd8969b4c8310ff099"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(

    <ChakraProvider>
      <App/>
    </ChakraProvider>

)