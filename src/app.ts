import cors from "cors";
import express from "express";
import {
  errorHandler,
  notFoundHandler,
} from "./middlewares/error.middleware.ts";
import { sessionMidleware } from "./middlewares/session.midleware.ts";
import router from "./routes.ts";

const app = express();

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});
//configuracion de cors para acceso a origines cruzados
app.use(cors({origin:"http://localhost:5173"}));
//middleware para los request 
app.use(express.json());
//configura el middleware para las sessiones 
app.use(sessionMidleware);
app.use("/api", router);

// Aqui se ponen los middlewares de error
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
