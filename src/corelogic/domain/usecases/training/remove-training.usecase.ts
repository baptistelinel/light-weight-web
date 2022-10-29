import { PayloadAction } from '@reduxjs/toolkit';
import { ofType, StateObservable } from 'redux-observable';
import { catchError, from, map, Observable, of, switchMap } from 'rxjs';
import { Dependencies } from '../../../../configurations/dependencies.interface';
import { AppState } from '../../../redux/states/app.state';
import {
  removeTrainingFailure,
  removeTrainingSuccess,
} from '../../../redux/training/training.slice';
import { Training } from '../../models/training.model';

export const removeTrainingEpic = (
  action$: Observable<PayloadAction<string>>,
  _state$: StateObservable<AppState>,
  dependencies: Dependencies,
) => {
  return action$.pipe(
    ofType('training/removeTraining'),
    switchMap((action) => {
      return from(dependencies.trainingGateway.remove(action.payload)).pipe(
        map((training: Training) => {
          return removeTrainingSuccess(training);
        }),
        catchError((error) => {
          return of(removeTrainingFailure(`Failed to delete training`));
        }),
      );
    }),
  );
};
