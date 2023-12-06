// Login 기능

import { useState } from "react";
import {auth} from "./firebaseinit";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
export default function Login(){
  const [userData,setUserData] = useState(null);

  function handleLogin(){
    // 구글 계정으로 로그인 처리
    const provider = new GoogleAuthProvider();
    // 구글 로그인 팝업창
    signInWithPopup(auth, provider)
        .then((data)=>{
          setUserData(data.user);
        })
        .catch((err)=>{
          alert("로그인에 실패하셨습니다." + err)
        })
  }

  return(
    <div>
      <button onClick={handleLogin}>Login</button> 
      <p>UserName: {userData ? userData.displayName : null}</p>
      
    </div>
  );
}