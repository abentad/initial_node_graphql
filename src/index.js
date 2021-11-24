const { GraphQLServer } = require('graphql-yoga');
const Query = require('./resolvers/Query');
 

const server = new GraphQLServer({ typeDefs:'src/schema.graphql', resolvers: { Query } })
server.start(() => console.log('Server is running on http://localhost:4000'));