import { createSlice } from '@reduxjs/toolkit';
import { exerciseInitialState } from '../states/exercise.state';
import {
  createExerciseFailureReducer,
  createExerciseReducer,
  createExerciseSuccessReducer,
  removeExerciseFailureReducer,
  removeExerciseReducer,
  removeExerciseSuccessReducer,
  retrieveExercisesFailureReducer,
  retrieveExercisesReducer,
  retrieveExercisesSuccessReducer,
  updateExerciseFailureReducer,
  updateExerciseReducer,
  updateExerciseSuccessReducer,
} from './exercise.reducers';

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState: exerciseInitialState,
  reducers: {
    retrieveExercises: retrieveExercisesReducer,
    retrieveExercisesSuccess: retrieveExercisesSuccessReducer,
    retrieveExercisesFailure: retrieveExercisesFailureReducer,
    createExercise: createExerciseReducer,
    createExerciseSuccess: createExerciseSuccessReducer,
    createExerciseFailure: createExerciseFailureReducer,
    removeExercise: removeExerciseReducer,
    removeExerciseSuccess: removeExerciseSuccessReducer,
    removeExerciseFailure: removeExerciseFailureReducer,
    updateExercise: updateExerciseReducer,
    updateExerciseSuccess: updateExerciseSuccessReducer,
    updateExerciseFailure: updateExerciseFailureReducer,
  },
});

export const {
  retrieveExercises,
  retrieveExercisesSuccess,
  retrieveExercisesFailure,
  createExercise,
  createExerciseSuccess,
  createExerciseFailure,
  removeExercise,
  removeExerciseSuccess,
  removeExerciseFailure,
  updateExercise,
  updateExerciseSuccess,
  updateExerciseFailure,
} = exerciseSlice.actions;

export const exerciseReducer = exerciseSlice.reducer;
