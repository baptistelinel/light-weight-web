import { PayloadAction } from '@reduxjs/toolkit';
import { ofType, StateObservable } from 'redux-observable';
import { catchError, from, map, Observable, of, switchMap } from 'rxjs';
import { Dependencies } from '../../../../configurations/dependencies.interface';
import {
  retrieveExercisesFailure,
  retrieveExercisesSuccess,
} from '../../../redux/exercise/exercise.slice';
import { AppState } from '../../../redux/states/app.state';
import { Exercise } from '../../models/exercise.model';

export const retrieveExercisesEpic = (
  action$: Observable<PayloadAction<Exercise[]>>,
  _state$: StateObservable<AppState>,
  dependencies: Dependencies,
) => {
  return action$.pipe(
    ofType('exercise/retrieveExercises'),
    switchMap(() => {
      return from(dependencies.exerciseGateway.retrieveAll()).pipe(
        map((exercises: Exercise[]) => {
          return retrieveExercisesSuccess(exercises);
        }),
        catchError(() => {
          return of(retrieveExercisesFailure('Failed to retrieve exercises'));
        }),
      );
    }),
  );
};
