import { ExerciseDone } from './training.model';

export interface PersonalRecord {
  id: string;
  exercise: ExerciseDone;
  date: Date;
}
