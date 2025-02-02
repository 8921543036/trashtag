 // Initialize Firebase with your config object
 const firebaseConfig = {
    apiKey: "AIzaSyDErtislsLPoIk2YmgdytwXBHqkmszdFbw",
    authDomain: "sample-firebase-ai-app-f4a3c.firebaseapp.com",
    projectId: "sample-firebase-ai-app-f4a3c",
    storageBucket: "sample-firebase-ai-app-f4a3c.firebasestorage.app",
    messagingSenderId: "337069964031",
    appId: "1:337069964031:web:6cfe479df35c67ba45aaca"
  };

  // Initialize Firebase App
  const app = firebase.initializeApp(firebaseConfig);
  
  // Initialize Firestore using compat SDK
  const db = firebase.firestore(app);
