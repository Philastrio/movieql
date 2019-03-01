import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const url = 'https://hkmovieql.herokuapp.com/';

const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql',
  resolvers
});

// server.start(() => console.log('♻ GraphQL Server Running ♻'));
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
