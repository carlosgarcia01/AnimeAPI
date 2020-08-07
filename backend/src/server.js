import express from "express";
import dotenv from "dotenv";
dotenv.config();

const { PORT } = process.env.PORT;

const app = express();

app.set("port", PORT || 3000);

export default app;
