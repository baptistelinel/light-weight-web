import { PayloadAction } from '@reduxjs/toolkit';
import { ofType, StateObservable } from 'redux-observable';
import { catchError, from, map, Observable, of, switchMap } from 'rxjs';
import { ExerciseUpdateDTO } from '../../../../adapter/secondaries/exercise/exercise-update.dto';
import { Dependencies } from '../../../../configurations/dependencies.interface';
import {
  updateExerciseFailure,
  updateExerciseSuccess,
} from '../../../redux/exercise/exercise.slice';
import { AppState } from '../../../redux/states/app.state';
import { Exercise } from '../../models/exercise.model';

export const updateExerciseEpic = (
  action$: Observable<
    PayloadAction<{ id: string; exerciseUpdateDTO: ExerciseUpdateDTO }>
  >,
  _state$: StateObservable<AppState>,
  dependencies: Dependencies,
) => {
  return action$.pipe(
    ofType('exercise/updateExercise'),
    switchMap((action) => {
      return from(
        dependencies.exerciseGateway.update(action.payload.id, {
          name: action.payload.exerciseUpdateDTO.name,
        }),
      ).pipe(
        map((exercise: Exercise) => {
          return updateExerciseSuccess({ id: action.payload.id, exercise });
        }),
        catchError((error) => {
          return of(
            updateExerciseFailure(`Failed to update exercise: ${error}`),
          );
        }),
      );
    }),
  );
};
