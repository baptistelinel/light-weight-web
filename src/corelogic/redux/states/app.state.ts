import { ExerciseState } from './exercise.state';
import { PersonalRecordState } from './personal-record.state';
import { TrainingState } from './training.state';

export interface AppState {
  exercise: ExerciseState;
  training: TrainingState;
  personalRecord: PersonalRecordState;
}
