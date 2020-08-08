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
        /* Anime crud functions */
        createAnime: async (_, { input }) =>{
            try {
                const newAnime = new Anime(input);
                const animeReturned = await newAnime.save();
                return animeReturned;
            } catch (error) {
                return error;
            }
        },
        updateAnime: async (_,{ _id,input }) =>{
            try {
                await Anime.findByIdAndUpdate(_id,input);
                return "Anime was updated";
            } catch (error) {
                return error;
            }
        },
        deleteAnime: async (_, { _id } ) =>{
            try {
                await Anime.findByIdAndDelete(_id);
                return "Anime was deleted";
            } catch (error) {
                return error;
            }
        },

        /* Categories cruds funtcions */
        createCategory: async (_,{ input }) => {
            const newCategory = new Category({name:input});
            const categoryReturned = await newCategory.save();
            return categoryReturned;
        },
        updateCategory: async (_,{ _id,input }) =>{
            try {
                await Category.findByIdAndUpdate(_id,input);
                return "Category was updated";
            } catch (error) {
                return error;
            }
        },
        deleteCategory: async (_, { _id } ) =>{
            try {
                await Category.findByIdAndDelete(_id);
                return "Category was deleted";
            } catch (error) {
                return error;
            }
        },
    }
};