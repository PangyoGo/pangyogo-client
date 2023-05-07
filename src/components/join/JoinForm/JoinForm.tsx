import { formValidation } from "@/helpers/validation/user.validation";
import JoinInput from "../JoinInput/JoinInput";
import JoinIdInput from "../JoinInput/JoinIdInput";
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from './join-form.module.css';

export interface JoinFormData {
  id: string;
  nickname: string;
  password: string;
  passwordChk: string;
}

const JoinForm = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm<JoinFormData>({ mode: 'onBlur' });
  const onSubmit: SubmitHandler<JoinFormData> = data => {
    if (data.password !== data.passwordChk) {
      setError('passwordChk', {
        message: '비밀번호가 일치하지 않습니다.'
      }, { shouldFocus: true });
    }
  };

  const inputs: (keyof JoinFormData)[] = ['nickname', 'password', 'passwordChk'];
  const names: JoinFormData = {
    id: '아이디',
    nickname: '닉네임',
    password: '비밀번호',
    passwordChk: '비밀번호 확인'
  };

  return (
    <>
      <div className={`flex flex-col ${styled.form}`}>
        <h2 className="text-center font-bold">회원가입</h2>
        <form className={`inline-flex flex-col gap-3`} onSubmit={handleSubmit(onSubmit)}>
          <JoinIdInput
            label={names.id} 
            name='id' 
            register={register} 
            option={formValidation.id} 
            error={errors.id} 
            required 
          />
          {
            inputs.map((input) => (
              <JoinInput
                key={input}
                label={names[input]} 
                name={input} 
                register={register} 
                option={formValidation[input]} 
                error={errors[input]} 
                required 
              />
            ))
          }
          <div className={`${styled.buttons} flex`}>
            <button className={`flex-1 ${styled.reset}`} type="reset">취소</button>
            <button className={`flex-1 ${styled.submit}`} type="submit">확인</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default JoinForm;