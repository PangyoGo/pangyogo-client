import { Path, UseFormRegister, RegisterOptions, FieldError } from "react-hook-form";
import { JoinFormData } from "../JoinForm/JoinForm";
import styled from './join-input.module.css';

type InputProps = {
  label: String;
  name: Path<JoinFormData>;
  register: UseFormRegister<JoinFormData>;
  required?: boolean;
  option?: RegisterOptions
  error?: FieldError
};

const JoinInput = ({ 
  label, 
  name, 
  register, 
  error,
  required = false, 
  option = {} 
}: InputProps) => {
  return (
    <>
      <div className={styled.input}>
        <label>{ label }</label>
        <input className="text-black" {...register(name, { required, ...option })} />
      </div>
      { error && <div className={styled.error}>{error.message}</div> }
    </>
  )
};

export default JoinInput;