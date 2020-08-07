import { data } from '../data';
import Anime from './models/anime';
import Category from './models/category';
export const resolvers = {
    Query: {
        hello: ()=> 'Hello Otakus',
        animes: async() => Anime.find(),
        categories: async () => Category.find()
    },
    Mutation: {
        createAnime: async (_, { input }) =>{
            const newAnime = new Anime(input);
            const animeReturned = await newAnime.save();
            return animeReturned;

        },
        createCategory: async (_,{ input }) => {
            const newCategory = new Category({name:input});
            const categoryReturned = await newCategory.save();
            return categoryReturned;
        }
    }
};