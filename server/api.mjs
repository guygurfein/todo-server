import express from 'express'
import morgan from 'morgan'
import log from '@ajar/marker'
import cors from 'cors'

import {connect_db} from './db/mongoose.connection.mjs'
import todo_router from './modules/todo/todo.router.mjs'
import {error_handler,not_found} from './middleware/errors.handler.mjs'

const { PORT, DB_URI } = process.env;

const app = express();

// middlewares
app.use(cors());
app.use(morgan('dev'))

// routing

app.use('/api/todo', todo_router);

// central error handling
app.use(error_handler);
app.use('*', not_found);

//start the express api server
(async ()=> {
  await connect_db(DB_URI);  
  await app.listen(PORT);
  log.magenta(`api is live on`,` ✨ ⚡  http://:${PORT} ✨ ⚡`);  
})().catch(log.error)