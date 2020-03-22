import { ApolloServer } from 'apollo-server'
import resolvers from './resolvers'
import typeDefs from './schema'

export default function createApp(): Promise<ApolloServer> {
      return Promise.resolve( new ApolloServer({ typeDefs, resolvers }));
}
