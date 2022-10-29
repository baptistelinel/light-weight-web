import { ExerciseDone } from '../../../corelogic/domain/models/training.model';

export interface TrainingCreateDTO {
  name: string;
  exercises: ExerciseDone[];
  commentary?: string;
}
