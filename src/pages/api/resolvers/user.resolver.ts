import { JoinFormData } from "@/components/join/JoinForm/JoinForm";
import { UserInfo, LoginFormData } from "@/components/login/LoginForm/LoginForm";
import { CheckIdQuery, CheckIdResponse, JoinMutation, JoinResponse } from "@/services/api/join.api";
import { LoginMutation, LoginResponse } from "@/services/api/login.api"  
import { GraphQLClient } from "graphql-request";

const SERVER = '';
const URL = `${SERVER}/api/graphql`;
const graphQLClient = new GraphQLClient(URL);

//GraphQL 스키마를 통해 제공할 데이터를 정의하는 함수를 담은 객체를 할당
export const resolvers = {
  Query: {
    getUser: () => ({ id: "1", nickname: "World" }),
  },

  Mutation: {
    user: (): UserInfo => ({ id: "hyo0", nickname: "하하호호" }),

    login: ({id, password}: LoginFormData): Promise<LoginResponse> => (
      graphQLClient.request(LoginMutation, { id, password })
    ),

    join: ({ passwordChk, ...form }: JoinFormData): Promise<JoinResponse> => (
      graphQLClient.request(JoinMutation, { form })
    ),

    checkId: (id: string): Promise<CheckIdResponse> => (
      graphQLClient.request(CheckIdQuery, { id })
    )
  }
};