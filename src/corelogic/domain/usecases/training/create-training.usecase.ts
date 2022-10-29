import { PayloadAction } from '@reduxjs/toolkit';
import { ofType, StateObservable } from 'redux-observable';
import { catchError, from, map, Observable, of, switchMap } from 'rxjs';
import { TrainingCreateDTO } from '../../../../adapter/secondaries/training/training-create.dto';
import { Dependencies } from '../../../../configurations/dependencies.interface';

import { AppState } from '../../../redux/states/app.state';
import {
  createTrainingFailure,
  createTrainingSuccess,
} from '../../../redux/training/training.slice';
import { Training } from '../../models/training.model';

export const createTrainingEpic = (
  action$: Observable<PayloadAction<TrainingCreateDTO>>,
  _state$: StateObservable<AppState>,
  dependencies: Dependencies,
) => {
  return action$.pipe(
    ofType('training/createTraining'),
    switchMap((action) => {
      return from(
        dependencies.trainingGateway.create(
          action.payload as TrainingCreateDTO,
        ),
      ).pipe(
        map((training: Training) => {
          return createTrainingSuccess(training);
        }),
        catchError(() => {
          return of(createTrainingFailure('Failed to create training'));
        }),
      );
    }),
  );
};
