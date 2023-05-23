import { JoinFormData } from "@/components/join/JoinForm/JoinForm";
import { GraphQLClient, gql } from "graphql-request";

const graphQLClient = new GraphQLClient("/api/graphql");

export const JoinMutation = gql`
  mutation Join($form: CreateUserInput!) {
    join(form: $form)
  }
`

export const CheckIdQuery = gql`
  mutation CheckId($id: String!) {
    checkId(id: $id)
  }
`

export type CheckIdResponse = {
  checkId: boolean
}

export type JoinResponse = {
  join: boolean
}

export const checkId = (id: string): Promise<CheckIdResponse> => (
  graphQLClient.request(CheckIdQuery, { id })
);

export const join = ({ passwordChk, ...form }: JoinFormData): Promise<JoinResponse> => (
  graphQLClient.request(JoinMutation, { form })
);