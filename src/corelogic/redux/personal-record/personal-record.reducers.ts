import { PayloadAction } from '@reduxjs/toolkit';
import { PersonalRecord } from '../../domain/models/personal-record.model';
import { PersonalRecordState } from '../states/personal-record.state';

export const retrievePersonalRecordsReducer = (state: PersonalRecordState) => {
  state.isLoading = true;
};

export const retrievePersonalRecordsSuccessReducer = (
  state: PersonalRecordState,
  action: PayloadAction<PersonalRecord[]>,
) => {
  state.isLoading = false;
  state.personalRecords = action.payload;
};

export const retrievePersonalRecordsFailureReducer = (
  state: PersonalRecordState,
  action: PayloadAction<string>,
) => {
  state.isLoading = false;
  state.error = action.payload;
};
