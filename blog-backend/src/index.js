import dotenv from 'dotenv';
dotenv.config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import cors from 'koa2-cors';
import api from './api/index.js';
import jwtMiddleware from './lib/jwtMiddleware.js';

const { PORT, MONGO_URI } = process.env;
const corsOptions = {
  origin: 'http://localhost:3000', // 허락하고자 하는 요청 주소
  credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
};

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.error(e);
  });

const app = new Koa();

const router = new Router();
router.use('/api', api.routes());

app.use(cors(corsOptions));
app.use(bodyParser());
app.use(jwtMiddleware);

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(4000, () => {
  console.log('Listening to port %d', port);
});
