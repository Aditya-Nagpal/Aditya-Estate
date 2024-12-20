// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env.fb_api_key,
  authDomain: import.meta.env.fb_auth_domain,
  projectId: import.meta.env.fb_project_id,
  storageBucket: import.meta.env.fb_storage_bucket,
  messagingSenderId: import.meta.env.fb_mess_id,
  appId: import.meta.env.fb_app_id
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);