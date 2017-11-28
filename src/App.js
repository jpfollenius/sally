import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAyU2GCASUk-JDXW4DAeRsEPIK2105-JwA",
  authDomain: "sally-backend.firebaseapp.com",
  databaseURL: "https://sally-backend.firebaseio.com",
  projectId: "sally-backend",
  storageBucket: "sally-backend.appspot.com",
  messagingSenderId: "1048787517635"
};
firebase.initializeApp(config);

class App extends Component {
  render() {    
    return (
      <div>
        <header>
          <h1>Demo</h1>
        </header>       
      </div>
    );
  }
}

export default App;
