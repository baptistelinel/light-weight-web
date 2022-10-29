import { PayloadAction } from '@reduxjs/toolkit';
import { ofType, StateObservable } from 'redux-observable';
import { catchError, from, map, Observable, of, switchMap } from 'rxjs';
import { TrainingUpdateDTO } from '../../../../adapter/secondaries/training/training-update.dto';
import { Dependencies } from '../../../../configurations/dependencies.interface';
import { AppState } from '../../../redux/states/app.state';
import {
  updateTrainingFailure,
  updateTrainingSuccess,
} from '../../../redux/training/training.slice';
import { Training } from '../../models/training.model';

export const updateTrainingEpic = (
  action$: Observable<
    PayloadAction<{ id: string; trainingUpdateDTO: TrainingUpdateDTO }>
  >,
  _state$: StateObservable<AppState>,
  dependencies: Dependencies,
) => {
  return action$.pipe(
    ofType('training/updateTraining'),
    switchMap((action) => {
      return from(
        dependencies.trainingGateway.update(
          action.payload.id,
          action.payload.trainingUpdateDTO,
        ),
      ).pipe(
        map((training: Training) => {
          return updateTrainingSuccess({ id: action.payload.id, training });
        }),
        catchError((error) => {
          return of(
            updateTrainingFailure(`Failed to update training : ${error}`),
          );
        }),
      );
    }),
  );
};
