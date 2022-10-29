import { ExerciseName } from '../../../corelogic/domain/models/exercise.model';
import {
  ExerciseDone,
  Training,
} from '../../../corelogic/domain/models/training.model';
import { TrainingCreateDTO } from '../training/training-create.dto';

const date = new Date('2022-06-03');

export const exercisesDone: ExerciseDone[] = [
  {
    id: '1',
    name: ExerciseName.BENCH,
    weight: 95,
    repetitions: 1,
    rpe: 10,
  },
  {
    id: '2',
    name: ExerciseName.SQUAT,
    weight: 140,
    repetitions: 1,
    rpe: 9,
  },
];

export const trainings: Training[] = [
  {
    id: '1',
    name: 'Monday session',
    exercises: exercisesDone,
    commentary: 'Hard training',
    date,
    totalWeight: 235,
  },
  {
    id: '2',
    name: 'Sunday session',
    exercises: exercisesDone,
    commentary: 'Easy training',
    date,
    totalWeight: 235,
  },
];

export const trainingCreateDTO: TrainingCreateDTO = {
  name: 'Friday session',
  exercises: exercisesDone,
  commentary: 'New training session to try',
};
