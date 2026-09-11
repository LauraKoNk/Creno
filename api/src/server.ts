import express, { type Request, type Response } from "express";

const app = express();

const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get("/health", (_request: Request, response: Response) => {
  response.status(200).json({
    status: "ok",
    message: "Creno API is running",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Creno API démarrée sur le port ${PORT}`);
});