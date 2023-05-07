import { UserInfo } from "@/pages/login";

//GraphQL 스키마를 통해 제공할 데이터를 정의하는 함수를 담은 객체를 할당
export const resolvers = {
  Query: {
    getUser: () => ({ id: "1", nickname: "World" }),
  },

  Mutation: {
    user: (): UserInfo => ({ id: "hyo0", nickname: "하하호호" }),
    join: () => true,
    checkId: () => true
  }
};