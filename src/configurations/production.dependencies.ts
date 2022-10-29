import { ApiExerciseGateway } from '../adapter/secondaries/exercise/api-exercise.gateway';
import { ApiPersonalRecordGateway } from '../adapter/secondaries/personal-record/api-personal-record.gateway';
import { ApiTrainingGateway } from '../adapter/secondaries/training/api-training.gateway';
import { Dependencies } from './dependencies.interface';

const exerciseGateway = new ApiExerciseGateway();
const trainingGateway = new ApiTrainingGateway();
const personalRecordGateway = new ApiPersonalRecordGateway();

export const productionDependencies: Dependencies = {
  exerciseGateway,
  trainingGateway,
  personalRecordGateway,
};
