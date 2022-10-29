import { PayloadAction } from '@reduxjs/toolkit';
import { ofType, StateObservable } from 'redux-observable';
import { catchError, from, map, Observable, of, switchMap } from 'rxjs';
import { ExerciseCreateDTO } from '../../../../adapter/secondaries/exercise/exercise-create.dto';
import { Dependencies } from '../../../../configurations/dependencies.interface';
import {
  createExerciseFailure,
  createExerciseSuccess,
} from '../../../redux/exercise/exercise.slice';
import { AppState } from '../../../redux/states/app.state';
import { Exercise } from '../../models/exercise.model';

export const createExerciseEpic = (
  action$: Observable<PayloadAction<ExerciseCreateDTO>>,
  _state$: StateObservable<AppState>,
  dependencies: Dependencies,
) => {
  return action$.pipe(
    ofType('exercise/createExercise'),
    switchMap((action) => {
      return from(
        dependencies.exerciseGateway.create({
          name: action.payload.name,
        } as ExerciseCreateDTO),
      ).pipe(
        map((exercise: Exercise) => {
          return createExerciseSuccess(exercise);
        }),
        catchError(() => {
          return of(createExerciseFailure('Failed to create exercise'));
        }),
      );
    }),
  );
};
