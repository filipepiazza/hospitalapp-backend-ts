import express, { NextFunction, Request, Response } from "express";

import patientsService from "../services/patientsService";
import { newPatientSchema } from "../utils";
import { z } from "zod";
import { NewPatientEntry, Patient } from "../types";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientsService.getNonSensitiveEntries());
});

const errorMiddleware = (
  error: unknown,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof z.ZodError) {
    res.status(400).send({ error: error.issues });
  } else {
    next(error);
  }
};

const newPatientParser = (req: Request, _res: Response, next: NextFunction) => {
  try {
    newPatientSchema.parse(req.body);
    next();
  } catch (error: unknown) {
    next(error);
  }
};

// router.post("/", (req, res) => {
//   try {
//     const newPatientEntry = toNewPatientEntry(req.body);

//     const addedEntry = patientsService.addPatient(newPatientEntry);
//     res.json(addedEntry);
//   } catch (error: unknown) {
//     let errorMessage = "Something went wrong.";
//     if (error instanceof Error) {
//       errorMessage += " Error: " + error.message;
//     }
//     res.status(400).send(errorMessage);
//   }
// });

router.post(
  "/",
  newPatientParser,
  (req: Request<unknown, unknown, NewPatientEntry>, res: Response<Patient>) => {
    const addedEntry = patientsService.addPatient(req.body);
    res.json(addedEntry);
  }
);

router.use(errorMiddleware);

export default router;
