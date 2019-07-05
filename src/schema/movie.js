import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
  type Query {
    movies: [Movie]
    movie(id: ID, imdb_id: String!): Movie
  }

  type Movie {
    id: ID!
    budget: Int
    title: String
    release_date: Int
    production_companies: ProductionCompanies
  }

  type ProductionCompanies {
    id: ID
    logo_path: String
    name: String
    origin_country: String
  }

  type Mutation {
    upvoteMovie (movieId: Int!): Movie
  }

`;

const resolvers = {
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;