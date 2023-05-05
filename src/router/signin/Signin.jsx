import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

export default function Signin() {
  const logGoogleUsers = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    
   
  };
  return (
    <>
      <div>Signin</div>
      <button type="button" onClick={logGoogleUsers}>
        Click me
      </button>
    </>
  );
}
