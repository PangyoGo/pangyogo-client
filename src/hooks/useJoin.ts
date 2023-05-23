import { JoinFormData } from "@/components/join/JoinForm/JoinForm";
import { join, checkId } from "@/services/api/join.api";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMutation } from "react-query";

export default function useJoin() {
  const router = useRouter();
  const { mutate: joinMutation, data: joinData } = useMutation({
    mutationFn: (form: JoinFormData) => {
      return join(form);
    },

    onError() {
      alert('문제가 발생하였습니다. 다시 시도해 주시기 바랍니다.');
    }
  });

  const { mutate: checkIdMutation, data: checkData } = useMutation({
    mutationFn: (id: string) => {
      return checkId(id)
    },

    onError() {
      alert('문제가 발생하였습니다. 다시 시도해 주시기 바랍니다.');
    },

    onSuccess(result) {
      if (result) {
        alert('사용할 수 있는 아이디입니다.');
      } else {
        alert('중복된 아이디입니다.');
      }
    }
  });

  useEffect(() => {
    if (!joinData) return;

    alert('회원가입이 완료되었습니다.');
    router.push('/login');
  }, [joinData]);

  return {
    join: joinMutation,
    checkId: checkIdMutation,
    checkIdRespone: checkData?.checkId,
    joinResponse: joinData?.join
  }
}