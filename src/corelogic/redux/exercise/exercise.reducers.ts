import { PayloadAction } from '@reduxjs/toolkit';
import { ExerciseCreateDTO } from '../../../adapter/secondaries/exercise/exercise-create.dto';
import { ExerciseUpdateDTO } from '../../../adapter/secondaries/exercise/exercise-update.dto';
import { Exercise } from '../../domain/models/exercise.model';
import { ExerciseState } from '../states/exercise.state';

export const retrieveExercisesReducer = (state: ExerciseState) => {
  state.isLoading = true;
};

export const retrieveExercisesSuccessReducer = (
  state: ExerciseState,
  action: PayloadAction<Exercise[]>,
) => {
  state.isLoading = false;
  state.exercises = action.payload;
};

export const retrieveExercisesFailureReducer = (
  state: ExerciseState,
  action: PayloadAction<string>,
) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const createExerciseReducer = (
  state: ExerciseState,
  _action: PayloadAction<ExerciseCreateDTO>,
) => {
  state.isLoading = true;
};

export const createExerciseSuccessReducer = (
  state: ExerciseState,
  action: PayloadAction<Exercise>,
) => {
  state.isLoading = false;
  state.exercises.push(action.payload);
};

export const createExerciseFailureReducer = (
  state: ExerciseState,
  action: PayloadAction<string>,
) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const removeExerciseReducer = (
  state: ExerciseState,
  _action: PayloadAction<string>,
) => {
  state.isLoading = true;
};

export const removeExerciseSuccessReducer = (
  state: ExerciseState,
  action: PayloadAction<Exercise>,
) => {
  state.isLoading = false;
  state.exercises = state.exercises.filter(
    (exercise) => exercise.id !== action.payload.id,
  );
};

export const removeExerciseFailureReducer = (
  state: ExerciseState,
  action: PayloadAction<string>,
) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const updateExerciseReducer = (
  state: ExerciseState,
  _action: PayloadAction<{ id: string; exerciseUpdateDTO: ExerciseUpdateDTO }>,
) => {
  state.isLoading = true;
};

export const updateExerciseSuccessReducer = (
  state: ExerciseState,
  action: PayloadAction<{ id: string; exercise: Exercise }>,
) => {
  const { id, exercise } = { ...action.payload };
  state.isLoading = false;
  const exerciseIndexToUpdate = state.exercises.findIndex(
    (exercise) => exercise.id === id,
  );
  state.exercises[exerciseIndexToUpdate] = exercise;
};

export const updateExerciseFailureReducer = (
  state: ExerciseState,
  action: PayloadAction<string>,
) => {
  state.isLoading = false;
  state.error = action.payload;
};
