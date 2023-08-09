import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDajW9s_Zsj2zzmGAz52qrp5BCVa6OrBf0",
  authDomain: "netflix-clone-ab2b2.firebaseapp.com",
  projectId: "netflix-clone-ab2b2",
  storageBucket: "netflix-clone-ab2b2.appspot.com",
  messagingSenderId: "190691985530",
  appId: "1:190691985530:web:611b7777f461fcbfb813c3"
};
const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
