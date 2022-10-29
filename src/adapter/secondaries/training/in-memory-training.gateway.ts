import { TrainingGateway } from '../../../corelogic/domain/gateways/training.gateway';
import { ExerciseName } from '../../../corelogic/domain/models/exercise.model';
import {
  ExerciseDone,
  Training,
} from '../../../corelogic/domain/models/training.model';
import { TrainingCreateDTO } from './training-create.dto';
import { TrainingUpdateDTO } from './training-update.dto';

const date = new Date('2022-06-03');

export class InMemoryTrainingGateway implements TrainingGateway {
  private exercisesDone: ExerciseDone[] = [
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
  private trainings: Training[] = [
    {
      id: '1',
      name: 'Monday session',
      exercises: this.exercisesDone,
      commentary: 'Hard training',
      date,
      totalWeight: 235,
    },
    {
      id: '2',
      name: 'Sunday session',
      exercises: this.exercisesDone,
      commentary: 'Easy training',
      date,
      totalWeight: 235,
    },
  ];

  create = async (trainingToCreate: TrainingCreateDTO): Promise<Training> => {
    const training: Training = {
      ...trainingToCreate,
      id: '100',
      date,
      totalWeight: 235,
    };
    this.trainings = [...this.trainings, training];
    return training;
  };

  retrieveAll = async (): Promise<Training[]> => {
    return this.trainings;
  };

  update = async (
    id: string,
    trainingUpdate: TrainingUpdateDTO,
  ): Promise<Training> => {
    const trainingToUpdate = this.trainings.find(
      (training) => training.id === id,
    );
    if (undefined === trainingToUpdate) {
      throw new Error('Training not found');
    }
    const indexOfTrainingToUpdate = this.trainings.indexOf(trainingToUpdate);
    const updatedTraining: Training = {
      ...trainingToUpdate,
      ...trainingUpdate,
    };
    const copyTrainings = [...this.trainings];
    copyTrainings.splice(indexOfTrainingToUpdate, 1, updatedTraining);
    this.trainings = copyTrainings;
    return this.trainings[indexOfTrainingToUpdate];
  };

  remove = async (id: string) => {
    const trainingToRemove = this.trainings.find(
      (training) => training.id === id,
    );
    if (undefined === trainingToRemove) {
      throw new Error('Training not found');
    }
    const trainingIndexToRemove = this.trainings.indexOf(trainingToRemove);
    const copyTrainings = [...this.trainings];
    copyTrainings.splice(trainingIndexToRemove, 1);
    this.trainings = copyTrainings;
    return trainingToRemove;
  };
}
