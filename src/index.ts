import express from "express";

import diaryRouter from "./routes/diaries";
import diagnosisRoter from "./routes/diagnosis";
import patientsRouter from "./routes/patients";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api/diaries", diaryRouter);
app.use("/api/diagnosis", diagnosisRoter);
app.use("/api/patients", patientsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
