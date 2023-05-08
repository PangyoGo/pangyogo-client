import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import styled from './login-form.module.css';

export interface LoginFormData{
  id: string;
  password: string;
}

export interface User {
  id: string;
  nickname: string;
  accessToken: string;
  refeshToekn: string;
}

export type UserInfo = Pick<LoginFormData, 'id'> &{
  nickname: string;
}

export default function Login() {
  const auth = useAuth();
  const [loginInfo, SetLoginFormData] = useState({
    id: "",
    password: "",
  });
  
  const handleInputValue = (key: string) => (e: any) => {
    SetLoginFormData({ ...loginInfo, [key]: e.target.value });
  };

  const loginRequestHandler = (e:any) => {
    e.preventDefault();
    const {id, password} = loginInfo;
    if(!id || !password){
      alert("아디와 비밀번호 모두 입력해주세요.")
    }
    //console.log(id, password)
    auth.login(loginInfo)
  }
     
    return (
    <>
    <div className={`flex flex-col ${styled.form}`}>
        <h2 className="text-center font-bold">로그인</h2>
        <form className={`inline-flex flex-col gap-3`} onSubmit={(e) => e.preventDefault()}>
          <div className={styled.input_box}>
            <label htmlFor="for">ID</label>
            <input className={styled.input} type="id" onChange={handleInputValue("id")} />
          </div>
          <div className={styled.input_box}>
            <label htmlFor="for">PASSWORD</label>
                <input
                  className={styled.input}
                  type="password"
                  onChange={handleInputValue("password")}
                />
          </div>
          
          <div className={styled.btn_box}>
            <button className={styled.submit} type="submit" onClick={loginRequestHandler}>로그인</button>
          </div>
        </form>

        {/* <div>{auth.user?.id ? auth.user?.id  : "업승"}</div>
        <div>{auth.user?.nickname ? auth.user?.nickname  : "업승" }</div> */}
        </div>
    </>
        
    )
    
}