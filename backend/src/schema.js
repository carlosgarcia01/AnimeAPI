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

        updateAnime(_id:String,input:InputAnime):String


        deleteAnime(_id:String):String


        createCategory(input:String):Category

        updateCategory(_id:String, input:String):String

        deleteCategory(_id:String):String
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
        categories:[String]
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