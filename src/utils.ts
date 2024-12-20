import { z } from "zod";
import {
  Gender,
  NewDiaryEntry,
  NewPatientEntry,
  Visibility,
  Weather,
} from "./types";

// const isVisibility = (param: string): param is Visibility => {
//   return Object.values(Visibility)
//     .map((v) => v.toString())
//     .includes(param);
// };

// const parseVisibility = (visibility: unknown): Visibility => {
//   if (!visibility || !isString(visibility) || !isVisibility(visibility)) {
//     throw new Error("Incorrect or missing visibility: " + visibility);
//   }
//   return visibility;
// };

// const isWeather = (param: string): param is Weather => {
//   return Object.values(Weather)
//     .map((v) => v.toString())
//     .includes(param);
// };

// const parseWeather = (weather: unknown): Weather => {
//   if (!weather || !isString(weather) || !isWeather(weather)) {
//     throw new Error("Incorrect or missing weather: " + weather);
//   }
//   return weather;
// };

// const isDate = (date: string): boolean => {
//   return Boolean(Date.parse(date));
// };

// const parseDate = (date: unknown): string => {
//   if (!date || !isString(date) || !isDate(date)) {
//     throw new Error("Incorrect or missing date: " + date);
//   }
//   return date;
// };

// const isString = (text: unknown): text is string => {
//   return typeof text === "string" || text instanceof String;
// };

// const parseComment = (comment: unknown): string => {
//   return z.string().parse(comment);
// };

// const parseName = (name: unknown): string => {
//   if (!name || !isString(name)) {
//     throw new Error("Incorrect or missing name");
//   }

//   return name;
// };

// const parseSsn = (ssn: unknown): string => {
//   if (!ssn || !isString(ssn)) {
//     throw new Error("Incorrect or missing ssn");
//   }

//   return ssn;
// };

// const parseOccupation = (occupation: unknown): string => {
//   if (!occupation || !isString(occupation)) {
//     throw new Error("Incorrect or missing occupation");
//   }

//   return occupation;
// };

// const isGender = (param: string): param is Gender => {
//   return Object.values(Gender)
//     .map((v) => v.toString())
//     .includes(param);
// };

// const parseGender = (gender: unknown): Gender => {
//   if (!gender || !isString(gender) || !isGender(gender)) {
//     throw new Error("Incorrect or missing gender: " + gender);
//   }
//   return gender;
// };

export const newEntrySchema = z.object({
  weather: z.nativeEnum(Weather),
  visibility: z.nativeEnum(Visibility),
  date: z.string().date(),
  comment: z.string().optional(),
});

export const newPatientSchema = z.object({
  name: z.string(),
  dateOfBirth: z.string().date(),
  ssn: z.string(),
  gender: z.nativeEnum(Gender),
  occupation: z.string().optional(),
});

const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  //   if (!object || typeof object !== "object") {
  //     throw new Error("Incorrect or missing data");
  //   }

  //   if (
  //     "comment" in object &&
  //     "date" in object &&
  //     "weather" in object &&
  //     "visibility" in object
  //   ) {
  // const newEntry: NewDiaryEntry = {
  //     weather: z.nativeEnum(Weather).parse(object.weather),
  //     visibility: z.nativeEnum(Visibility).parse(object.visibility),
  //   date: z.string().date().parse(object.date),
  //   comment: z.string().optional().parse(object.comment)
  // };

  return newEntrySchema.parse(object);
  // }

  //throw new Error("Incorrect data: some fields are missing");
};

export const toNewPatientEntry = (object: unknown): NewPatientEntry => {
  //   if (!object || typeof object !== "object") {
  //     throw new Error("Incorrect or missing data");
  //   }

  //   if (
  //     "name" in object &&
  //     "ssn" in object &&
  //     "occupation" in object &&
  //     "visibility" in object &&
  //     "dateOfBirth" in object &&
  //     "gender" in object
  //   ) {
  //     const newEntry: NewPatientEntry = {
  //       name: parseName(object.name),
  //       dateOfBirth: parseDate(object.dateOfBirth),
  //       ssn: parseSsn(object.ssn),
  //       gender: parseGender(object.gender),
  //       occupation: parseOccupation(object.occupation),
  //     };

  //     return newEntry;
  //   } else {
  //     throw new Error("Incorrect data: some fields are missing");
  //   }

  return newPatientSchema.parse(object);
};

export default toNewDiaryEntry;
