import { ExerciseDone } from '../../../../../../corelogic/domain/models/training.model';

export type TrainingFormValues = {
  name: string;
  commentary: string;
  exercises: ExerciseDone[];
};
