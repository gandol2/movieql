import { graphQLServer, GraphQLServer } from "graphql-yoga";

const server = new GraphQLServer({});

server.start(() => console.log("Server Start!!"));
