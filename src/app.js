import express, { json } from 'express';
import morgan from 'morgan';
import {errorLog,errorHandler,boomErrorHandler} from './middleware/error.handler'
//Importing routes
import contratosRoutes from './routes/contratos.route';
import clientesRoutes from './routes/clientes.route';


const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());
//routes
app.use('/api/contratos', contratosRoutes);
app.use('/api/clientes', clientesRoutes);

//middlewares de error
app.use(errorLog)
app.use(boomErrorHandler)
app.use(errorHandler)

export default app;