import { useState } from "react";

function SignUp() {
  let [id,setId] = useState('');
  let [password,setPassword] = useState('');

 const handleChange = (e) => {
    setId(e.target.value);
    console.log(e.target.value)
 }

 const handleClick  = () => {
  setId('');
  setPassword('');
 }
  return(
    <div>
      <input type="text" name = 'id' value={id} onChange={handleChange}></input>
      <input type = "password" name ='password' value={password} onChange={handleChange}></input>
      <button onClick={handleClick}>버튼</button>
      
    </div>
  )
}
export default SignUp;