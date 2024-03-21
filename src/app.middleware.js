import express from 'express';
import cors from 'cors';
import requestInfo from './middlewares/request-info.middleware.js';
import humpsMiddleware from './middlewares/humps.middleware.js';

const AppMiddleware = express()


AppMiddleware.use(express.urlencoded({ extended: true }))   //แปลงformให้อยู่ในรูปแบบurl endoce เป็น Obj
AppMiddleware.use(express.json())   //แปลงเป็น json ก่อนใช้งาน
AppMiddleware.use(cors())
AppMiddleware.use(requestInfo())
AppMiddleware.use(humpsMiddleware())

export default AppMiddleware