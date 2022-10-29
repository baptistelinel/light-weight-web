import {
  Exercise,
  ExerciseName,
} from '../../../corelogic/domain/models/exercise.model';
import { ExerciseCreateDTO } from '../exercise/exercise-create.dto';

export const exercises: Exercise[] = [
  {
    id: '1',
    name: ExerciseName.SQUAT,
  },
  {
    id: '2',
    name: ExerciseName.BENCH,
  },
];

export const exerciseCreateDTO: ExerciseCreateDTO = { name: 'Squat 2 CT' };
