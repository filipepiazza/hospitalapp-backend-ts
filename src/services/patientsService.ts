import data from "../../data/patients";
import { NewPatientEntry, Patient, SensitivePatient } from "../types";
//import { v1 as uuid } from "uuid";

const getEntries = (): Patient[] => {
  return data;
};

const getNonSensitiveEntries = (): SensitivePatient[] => {
  return data.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatientEntry): Patient => {
  //const id = uuid();
  const newPatientEntry = {
    id: String(Math.max(...data.map((d) => Number(d.id))) + 1),
    ...entry,
  };

  data.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getEntries,
  getNonSensitiveEntries,
  addPatient,
};
