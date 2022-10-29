import { InMemoryExerciseGateway } from '../adapter/secondaries/exercise/in-memory-exercise.gateway';
import { InMemoryPersonalRecordGateway } from '../adapter/secondaries/personal-record/in-memory-personal-record.gateway';
import { InMemoryTrainingGateway } from '../adapter/secondaries/training/in-memory-training.gateway';
import { Dependencies } from './dependencies.interface';

const exerciseGateway = new InMemoryExerciseGateway();
const trainingGateway = new InMemoryTrainingGateway();
const personalRecordGateway = new InMemoryPersonalRecordGateway();

export const inMemoryDependencies: Dependencies = {
  exerciseGateway,
  trainingGateway,
  personalRecordGateway,
};
