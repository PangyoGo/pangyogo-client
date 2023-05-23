import JoinForm from "@/components/join/JoinForm/JoinForm";
import { NextPage } from "next";

const Join: NextPage = () => {
  return (
    <>
      <div className="h-full flex justify-center items-center flex-col">
        <JoinForm />
      </div>
    </>
  );
};

export default Join;