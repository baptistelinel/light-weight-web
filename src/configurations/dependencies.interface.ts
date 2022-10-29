import { ExerciseGateway } from '../corelogic/domain/gateways/exercise.gateway';
import { PersonalRecordGateway } from '../corelogic/domain/gateways/personal-record.gateway';
import { TrainingGateway } from '../corelogic/domain/gateways/training.gateway';

export interface Dependencies {
  exerciseGateway: ExerciseGateway;
  trainingGateway: TrainingGateway;
  personalRecordGateway: PersonalRecordGateway;
}
