const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { PORT } = process.env;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

const dataRouter = require('./routes/data');
server.use('/data', dataRouter);

server.listen(PORT, () => {
  console.log(`데이터 통신용 서버가 ${PORT}에서 실행 중`);
});
