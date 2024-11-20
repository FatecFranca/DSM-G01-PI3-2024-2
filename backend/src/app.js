import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import express, { json, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'

const app = express()

const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Tecjobs Api',
        version: '1.0.0',
        description: 'Documentação da API da tecjobs, criado para explicar e documentar as rotas da aplicação.',
      },
    },
    apis: ['./routes/*.js'], 
  };

const swaggerDocs = swaggerJsdoc(swaggerOptions);


app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/*************** ROTAS *******************/
import empresaRouter from './routes/empresa.js'
app.use('/empresa', empresaRouter)

import oportunidadeRouter from './routes/oportunidade.js'
app.use('/oportunidade', oportunidadeRouter)

import usuarioRouter from './routes/usuario.js'
app.use('/usuario', usuarioRouter)

import tipoRouter from './routes/tipo.js'
app.use('/tipo', tipoRouter)

export default app
