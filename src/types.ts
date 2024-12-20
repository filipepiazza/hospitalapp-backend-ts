import { z } from "zod";
import { newEntrySchema, newPatientSchema } from "./utils";

export enum Weather {
  Sunny = "sunny",
  Rainy = "rainy",
  Cloudy = "cloudy",
  Stormy = "stormy",
  Windy = "windy",
}

export enum Visibility {
  Great = "great",
  Good = "good",
  Ok = "ok",
  Poor = "poor",
}

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment?: string; // ? means optional
}

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, "comment">;

export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
}

// export interface Patient {
//   id: string;
//   name: string;
//   dateOfBirth: string;
//   ssn: string;
//   gender: Gender;
//   occupation?: string;
// }

export type SensitivePatient = Omit<Patient, "ssn">;

//export type NewDiaryEntry = Omit<DiaryEntry, "id">;

// infer the type from schema
export type NewDiaryEntry = z.infer<typeof newEntrySchema>;

export interface DiaryEntry extends NewDiaryEntry {
  id: number;
}

//export type NewPatientEntry = Omit<Patient, "id">;

export type NewPatientEntry = z.infer<typeof newPatientSchema>;

export interface Patient extends NewPatientEntry {
  id: string;
}
