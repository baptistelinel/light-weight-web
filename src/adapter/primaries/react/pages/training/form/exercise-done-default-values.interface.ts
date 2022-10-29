import { ExerciseName } from '../../../../../../corelogic/domain/models/exercise.model';
import { ExerciseDone } from '../../../../../../corelogic/domain/models/training.model';

export const exerciseDoneDefaultValues: ExerciseDone = {
  name: ExerciseName.SQUAT,
  weight: 0,
  repetitions: 0,
  rpe: 0,
};
