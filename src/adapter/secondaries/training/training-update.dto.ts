import { ExerciseDone } from '../../../corelogic/domain/models/training.model';

export interface TrainingUpdateDTO {
  name?: string;
  exercises?: ExerciseDone[];
  commentary?: string;
}
