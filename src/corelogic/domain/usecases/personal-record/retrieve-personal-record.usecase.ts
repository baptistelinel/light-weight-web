import { PayloadAction } from '@reduxjs/toolkit';
import { ofType, StateObservable } from 'redux-observable';
import { catchError, from, map, Observable, of, switchMap } from 'rxjs';
import { Dependencies } from '../../../../configurations/dependencies.interface';
import {
  retrievePersonalRecordsFailure,
  retrievePersonalRecordsSuccess,
} from '../../../redux/personal-record/personal-record.slice';
import { AppState } from '../../../redux/states/app.state';
import { PersonalRecord } from '../../models/personal-record.model';

export const retrievePersonalRecordsEpic = (
  action$: Observable<PayloadAction<PersonalRecord[]>>,
  _state$: StateObservable<AppState>,
  dependencies: Dependencies,
) => {
  return action$.pipe(
    ofType('personalRecord/retrievePersonalRecords'),
    switchMap(() => {
      return from(dependencies.personalRecordGateway.retrieveAll()).pipe(
        map((personalRecords: PersonalRecord[]) => {
          return retrievePersonalRecordsSuccess(personalRecords);
        }),
        catchError(() => {
          return of(
            retrievePersonalRecordsFailure(
              'Failed to retrieve personal records',
            ),
          );
        }),
      );
    }),
  );
};
