import { PayloadAction } from '@reduxjs/toolkit';
import { TrainingCreateDTO } from '../../../adapter/secondaries/training/training-create.dto';
import { TrainingUpdateDTO } from '../../../adapter/secondaries/training/training-update.dto';
import { Exercise } from '../../domain/models/exercise.model';
import { Training } from '../../domain/models/training.model';
import { TrainingState } from '../states/training.state';

export const createTrainingReducer = (
  state: TrainingState,
  _action: PayloadAction<TrainingCreateDTO>,
) => {
  state.isLoading = true;
};

export const createTrainingSuccessReducer = (
  state: TrainingState,
  action: PayloadAction<Training>,
) => {
  state.isLoading = false;
  state.trainings.push(action.payload);
};

export const createTrainingFailureReducer = (
  state: TrainingState,
  action: PayloadAction<string>,
) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const retrieveTrainingsReducer = (state: TrainingState) => {
  state.isLoading = true;
};

export const retrieveTrainingsSuccessReducer = (
  state: TrainingState,
  action: PayloadAction<Training[]>,
) => {
  state.isLoading = false;
  state.trainings = action.payload;
};

export const retrieveTrainingsFailureReducer = (
  state: TrainingState,
  action: PayloadAction<string>,
) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const updateTrainingReducer = (
  state: TrainingState,
  _action: PayloadAction<{ id: string; trainingUpdateDTO: TrainingUpdateDTO }>,
) => {
  state.isLoading = true;
};

export const updateTrainingSucessReducer = (
  state: TrainingState,
  action: PayloadAction<{ id: string; training: Training }>,
) => {
  const { id, training } = { ...action.payload };
  state.isLoading = false;
  const trainingIndexToUpdate = state.trainings.findIndex(
    (training) => training.id === id,
  );
  state.trainings[trainingIndexToUpdate] = training;
};

export const updateTrainingFailureReducer = (
  state: TrainingState,
  action: PayloadAction<string>,
) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const removeTrainingReducer = (
  state: TrainingState,
  _action: PayloadAction<string>,
) => {
  state.isLoading = true;
};

export const removeTrainingSuccessReducer = (
  state: TrainingState,
  action: PayloadAction<Exercise>,
) => {
  state.isLoading = false;
  state.trainings = state.trainings.filter(
    (training) => training.id !== action.payload.id,
  );
};

export const removeTrainingFailureReducer = (
  state: TrainingState,
  action: PayloadAction<string>,
) => {
  state.isLoading = false;
  state.error = action.payload;
};
