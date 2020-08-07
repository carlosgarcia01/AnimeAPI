import app from './server';
import connect from './database';
import {graphqlHTTP} from 'express-graphql';
import schema from './schema';


app.use(`/graphql`, graphqlHTTP({
    graphiql:true,
    schema: schema
}));
connect();

app.listen(app.get('port'),() => console.log(`Server on port ${app.get('port')}` ));