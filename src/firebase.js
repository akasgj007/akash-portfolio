import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPqzjYmHzq5vZCTzN6OHruwqs2zdT7M-k",
  authDomain: "ak-portfolio-331bd.firebaseapp.com",
  projectId: "ak-portfolio-331bd",
  storageBucket: "ak-portfolio-331bd.firebasestorage.app",
  messagingSenderId: "488001271816",
  appId: "1:488001271816:web:552e8d5e58d98bb2a939bd",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
