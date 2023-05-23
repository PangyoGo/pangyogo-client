import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs } from './types';
import { resolvers as userResolvers } from './resolvers/user.resolver';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers: {
    ...userResolvers
  },
});

export default startServerAndCreateNextHandler(apolloServer);
