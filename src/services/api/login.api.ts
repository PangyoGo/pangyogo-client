import { LoginInfo, User } from "@/components/login/LoginForm/LoginForm";
import { GraphQLClient, gql } from "graphql-request";

const graphQLClient = new GraphQLClient("/api/graphql");

export const LoginMutation = gql`
  mutation Login($id:String, $password:String) {
    login($id:String, $password:String)
  }
`
export type LoginResponse = {
    login: Boolean
}

export const login = ({ id, password }: LoginInfo): Promise<LoginResponse> => (
    graphQLClient.request(LoginMutation, { id, password })
);