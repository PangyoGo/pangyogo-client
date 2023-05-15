import { Path, UseFormRegister, RegisterOptions, FieldError } from "react-hook-form";
import { JoinFormData } from "../JoinForm/JoinForm";
import styled from './join-input.module.css';

type InputProps = {
  label: String;
  name: Path<JoinFormData>;
  register: UseFormRegister<JoinFormData>;
  required?: boolean;
  option?: RegisterOptions;
  error?: FieldError;
  type?: string
};

const JoinInput = ({ 
  label, 
  name, 
  register, 
  error,
  type = 'text',
  required = false, 
  option = {} 
}: InputProps) => {
  return (
    <>
      <div className={styled.input}>
        <label>{ label }</label>
        <input type={type} className="text-black" {...register(name, { required, ...option })} />
      </div>
      { error && <div className={styled.error}>{error.message}</div> }
    </>
  )
};

export default JoinInput;