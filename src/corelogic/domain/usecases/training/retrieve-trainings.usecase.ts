import { PayloadAction } from '@reduxjs/toolkit';
import { ofType, StateObservable } from 'redux-observable';
import { catchError, from, map, Observable, of, switchMap } from 'rxjs';
import { Dependencies } from '../../../../configurations/dependencies.interface';
import { AppState } from '../../../redux/states/app.state';
import {
  retrieveTrainingsFailure,
  retrieveTrainingsSuccess,
} from '../../../redux/training/training.slice';
import { Training } from '../../models/training.model';

export const retrieveTrainingsEpic = (
  action$: Observable<PayloadAction<Training[]>>,
  _state$: StateObservable<AppState>,
  dependencies: Dependencies,
) => {
  return action$.pipe(
    ofType('training/retrieveTrainings'),
    switchMap(() => {
      return from(dependencies.trainingGateway.retrieveAll()).pipe(
        map((trainings: Training[]) => {
          return retrieveTrainingsSuccess(trainings);
        }),
        catchError(() => {
          return of(retrieveTrainingsFailure('Failed to retrieve trainings'));
        }),
      );
    }),
  );
};
