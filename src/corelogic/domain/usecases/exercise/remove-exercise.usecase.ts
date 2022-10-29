import { PayloadAction } from '@reduxjs/toolkit';
import { ofType, StateObservable } from 'redux-observable';
import { catchError, from, map, Observable, of, switchMap } from 'rxjs';
import { Dependencies } from '../../../../configurations/dependencies.interface';
import {
  removeExerciseFailure,
  removeExerciseSuccess,
} from '../../../redux/exercise/exercise.slice';
import { AppState } from '../../../redux/states/app.state';
import { Exercise } from '../../models/exercise.model';

export const removeExerciseEpic = (
  action$: Observable<PayloadAction<string>>,
  _state$: StateObservable<AppState>,
  dependencies: Dependencies,
) => {
  return action$.pipe(
    ofType('exercise/removeExercise'),
    switchMap((action) => {
      return from(dependencies.exerciseGateway.remove(action.payload)).pipe(
        map((exercise: Exercise) => {
          return removeExerciseSuccess(exercise);
        }),
        catchError(() => {
          return of(removeExerciseFailure('Failed to delete exercise'));
        }),
      );
    }),
  );
};
