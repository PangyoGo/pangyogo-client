import LoginForm from "@/components/login/LoginForm/LoginForm";
import { NextPage } from "next";

const Join: NextPage = () => {
  return (
    <>
      <div className="h-full flex justify-center items-center flex-col">
        <LoginForm />
      </div>
    </>
  );
};

export default Join;