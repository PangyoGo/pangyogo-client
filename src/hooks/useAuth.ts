import { LoginInfo, UserInfo } from "@/components/login/LoginForm/LoginForm";
import { GraphQLClient, Variables, gql } from "graphql-request";
import { useRouter } from "next/router";
import { QueryClient, useMutation, useQuery, useQueryClient } from "react-query"


export const useAuth = () => {
  const router = useRouter();
  const queryClient = useQueryClient(); //store
  //get 이외
  //useMutation 호출할때 뮤테이션 타입의 함수를 반환해준다. 함수호출
  //callback server api요청 보통 ㅎㅎ

  const loginMutaion = useMutation(async({id, password}:LoginInfo) => {
    
    const graphQLClient = new GraphQLClient("http://localhost:3000/api/graphql"); //server 연결
    const UserQuery = gql`
      mutation GetUser($id:String, $password:String){
        user(id: $id, password: $password) {
          id
          nickname
        }
      }
    `;
    try{
      const res =  await graphQLClient.request<{user:UserInfo}, Variables&LoginInfo>(UserQuery, {id, password})
      return res.user; 
    }catch(err){
      throw err
    }
  }, {
    onSuccess(value: UserInfo){
      //QueryClient를 저장하기
      queryClient.setQueryData(["userInfo"],value);
      console.log(value, "onSuccess")
    }
  })

  const {data} = useQuery({
    queryKey:["userInfo"],
    //api 통신결과 저장이 목표 ->api통신 작성
    //jwt 상태를 가지고 있지 않기 때문에 진짜 유저인지 확인해하니까 로그인유무
    //새로고침시도 활용
    queryFn():UserInfo|null{
      return queryClient.getQueryData(["userInfo"]) || null;
      //accesstoken -> 전달 ->server
      //server -> 진짜 유저 맞아 -> 서버가 유저 인포도 같이 반환
    }
  })
  
  //console.log()
  return {login: loginMutaion.mutate, user: data};
}