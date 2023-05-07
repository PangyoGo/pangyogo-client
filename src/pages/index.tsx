import Image from 'next/image'
import { Inter } from 'next/font/google'
import type { NextPage } from "next";
import { useQuery } from "react-query";//server에서 데이터를 가져오는 훅
import { GraphQLClient, gql } from "graphql-request";

const inter = Inter({ subsets: ['latin'] })

const UserQuery = gql`
  query getUser {
    getUser {
     id
     firstName
     lastName
    }
  }
`;

const graphQLClient = new GraphQLClient("http://localhost:3000/api/graphql");
const fetchUser = async () => {
  return await graphQLClient.request(UserQuery);
};

const Home: NextPage = () => {
  const { isLoading, data } = useQuery(["get-user"], fetchUser);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div className="flex h-screen w-screen justify-center items-center">
        <div>
          <p>{data.getUser.id}</p>
          <p>{data.getUser.firstName}</p>
					<p>{data.getUser.lastName}</p>
        </div>
      </div>
    </>
  );
};

export default Home;
// export default function Home() {
//   return (
//     <main
//       className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
//     >
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">src/pages/index.tsx</code>
//         </p>
//       </div>


//     </main>
//   )
// }
