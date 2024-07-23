import express from 'express';
import { Signale } from 'signale';
import { userRouter } from './src/usuarios/infrastructure/userRoutes';
import bodyParser from 'body-parser';

const app = express();
const signale = new Signale();

app.use(express.json());
app.use(bodyParser.json()); // Si usas body-parser

// Rutas relacionadas con usuarios
app.use(userRouter);

const PORT = 8081;
const HOST = '0.0.0.0';  // Escuchar en todas las interfaces de red

app.listen(PORT, HOST, () => {
    signale.success(`Server online on port ${PORT}`);
});
