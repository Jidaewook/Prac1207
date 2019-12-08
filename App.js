const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const userRoutes = require('./Routes/user');

const profileRoutes = require('./Routes/profile');

const bbsRoutes = require('./Routes/bbs');

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// 서버가 연결된 후, userRoutes의 페이지 내 주소로 연결될 수 있게 해주는 주소등록
app.use("/user", userRoutes);
app.use("/profile", profileRoutes);

const port = 7000;

app.listen(port, () => console.log(`Server Running on ${port}`));