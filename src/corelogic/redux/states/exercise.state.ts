import { Exercise } from '../../domain/models/exercise.model';

export interface ExerciseState {
  isLoading: boolean;
  exercises: Exercise[];
  error?: string;
}

export const exerciseInitialState: ExerciseState = {
  isLoading: false,
  exercises: [],
};
