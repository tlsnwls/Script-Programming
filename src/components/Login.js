import { useState, useEffect } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, setPersistence, browserSessionPersistence } from "firebase/auth";

export default function Login() {
  const [userData, setUserData] = useState(null);
  const provider = new GoogleAuthProvider(); // 구글 계정으로 로그인 처리
  const auth = getAuth();

  useEffect(() => {
    // 페이지 로드 시 세션 스토리지에서 로그인 정보를 확인하여 상태 업데이트
    const userFromStorage = sessionStorage.getItem('user');
    if (userFromStorage) {
      setUserData(JSON.parse(userFromStorage));
    }
  }, []);

  const handleLogin = () => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithPopup(auth, provider) // 구글 로그인 팝업창
          .then((result) => {
            setUserData(result.user);
            sessionStorage.setItem('user', JSON.stringify(result.user)); // 세션 스토리지에 로그인 정보 저장
            // 로그인 성공
          })
          .catch(error => {
            console.log(error);
          });
      })
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUserData(null);
        sessionStorage.removeItem('user'); // 로그아웃 시 세션 스토리지에서 정보 제거
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>{userData ? userData.displayName : null} 어서오세요</p>
    </div>
  );
}
