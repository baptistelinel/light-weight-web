import { Training } from '../../domain/models/training.model';

export interface TrainingState {
  isLoading: boolean;
  trainings: Training[];
  error?: string;
}

export const trainingInitialState: TrainingState = {
  isLoading: false,
  trainings: [],
};
