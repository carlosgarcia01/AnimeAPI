import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `

    type Query {
        hello:String
        animes:[Anime]
        categories:[Category]
    }

    type Mutation {
        createAnime(input:InputAnime):Anime
        createCategory(input:String):Category
    }

    input InputAnime {
        name:String!
        image:String
        categories:[String]
        chapters:Int!
    }
    
    type Anime {
        _id: ID
        name:String!
        image:String
        categories:[Category]
        chapters:Int!
    }

    type Category {
        _id:ID
        name:String
    }


`;


export default makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers: resolvers
});