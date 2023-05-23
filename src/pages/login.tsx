import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export interface LoginInfo{
  id: string;
  password: string;
}

export type UserInfo = Pick<LoginInfo, 'id'> &{
  nickname: string;
}

export default function Login() {
  const auth = useAuth();
  const [loginInfo, SetLoginInfo] = useState({
    id: "",
    password: "",
  });
  
  const handleInputValue = (key: string) => (e: any) => {
    SetLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const loginRequestHandler = (e:any) => {
    e.preventDefault();
    //const {id, password} = loginInfo;
    //console.log(id, password)
    auth.login(loginInfo)
  }
     
    return (
    <>
        <div>Login</div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="id-box">
            <label htmlFor="for">Id : </label>
            <input type="id" onChange={handleInputValue("id")} />
          </div>
          <div className="password-box">
            <label htmlFor="for">Password : </label>
                <input
                  type="password"
                  onChange={handleInputValue("password")}
                />
          </div>
          <div className="login-btn-box">
            <button type="submit" onClick={loginRequestHandler}>로그인</button>
          </div>
        </form>

        <div>{auth.user?.id ? auth.user?.id  : "업승"}</div>
        <div>{auth.user?.nickname ? auth.user?.nickname  : "업승" }</div>
    </>
        
    )
    
}