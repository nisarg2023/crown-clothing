import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAiVdRuBoVVFWActGVmKhYGPd-W9IEk5ec",
    authDomain: "crown-db-e4cf7.firebaseapp.com",
    projectId: "crown-db-e4cf7",
    storageBucket: "crown-db-e4cf7.appspot.com",
    messagingSenderId: "733112548205",
    appId: "1:733112548205:web:14af2365ad75fda53a3864",
    measurementId: "G-EFRKN2QHTG"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    console.log(userAuth.uid);
    const userDocRef = doc(db, 'users', userAuth.uid);

  
   const userSnapshot =  await getDoc(userDocRef);
   console.log(userSnapshot.exists());

   if(!userSnapshot.exists()) {
    const {displayName,email} = userAuth;
    const createdAt = new Date();

    try{
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt,
        });

    }
    catch(err){
        console.log("error in creatin user",err);
    }

   }
   

   return userDocRef;



}