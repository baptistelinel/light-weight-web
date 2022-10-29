import { createSlice } from '@reduxjs/toolkit';
import { trainingInitialState } from '../states/training.state';
import {
  createTrainingFailureReducer,
  createTrainingReducer,
  createTrainingSuccessReducer,
  removeTrainingFailureReducer,
  removeTrainingReducer,
  removeTrainingSuccessReducer,
  retrieveTrainingsFailureReducer,
  retrieveTrainingsReducer,
  retrieveTrainingsSuccessReducer,
  updateTrainingFailureReducer,
  updateTrainingReducer,
  updateTrainingSucessReducer,
} from './training.reducers';

export const trainingSlice = createSlice({
  name: 'training',
  initialState: trainingInitialState,
  reducers: {
    createTraining: createTrainingReducer,
    createTrainingSuccess: createTrainingSuccessReducer,
    createTrainingFailure: createTrainingFailureReducer,
    retrieveTrainings: retrieveTrainingsReducer,
    retrieveTrainingsSuccess: retrieveTrainingsSuccessReducer,
    retrieveTrainingsFailure: retrieveTrainingsFailureReducer,
    updateTraining: updateTrainingReducer,
    updateTrainingSuccess: updateTrainingSucessReducer,
    updateTrainingFailure: updateTrainingFailureReducer,
    removeTraining: removeTrainingReducer,
    removeTrainingSuccess: removeTrainingSuccessReducer,
    removeTrainingFailure: removeTrainingFailureReducer,
  },
});

export const {
  createTraining,
  createTrainingSuccess,
  createTrainingFailure,
  retrieveTrainings,
  retrieveTrainingsSuccess,
  retrieveTrainingsFailure,
  updateTraining,
  updateTrainingSuccess,
  updateTrainingFailure,
  removeTraining,
  removeTrainingSuccess,
  removeTrainingFailure,
} = trainingSlice.actions;

export const trainingReducer = trainingSlice.reducer;
