import { ApolloServer, gql } from 'apollo-server';
import { useMongo } from './common/mongo';
import { Db } from 'mongodb';

const typeDefs = gql`
  type CatalogItem {
    _id: ID
    order: String
    structures: [String]
  }

  type Query {
    catalogById(id:ID): CatalogItem
  }
`;

const resolvers = {
  Query: {
    catalogById: async (_parent: any, {id}: {id: string }, {db}: Context) => {
      return await db.collection('catalog').findOne({_id: parseInt(id, 10), order: "id"});
    }
  },
};

interface Context {
  db: Db
}

const useContext = async ()=> {
  const { db } = await useMongo();
  return {
    db
  }
}

const usePort = ()=> {
  const port = process.env.PORT;
  if (port && isFinite(parseInt(port, 10)) && parseInt(port, 10) > 0) {
      return parseInt(port, 10);
  }
  return 8080;
}

(async () => {
    try {
        // tslint:disable-next-line
        console.time("App Start");

        const context = {}; // await useContext();
        const server = new ApolloServer({ typeDefs, context, resolvers });

        const { url } = await server.listen({
            port: usePort(),
        });

        // tslint:disable-next-line
        console.log(`🚀  Server ready at ${url}`);

      } catch (e) {
        // tslint:disable-next-line
        console.error(e);
        process.exit(-1);
    }
})();