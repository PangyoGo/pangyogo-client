import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs } from './types';
import { resolvers } from './resolvers/user.resolver';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(apolloServer);
