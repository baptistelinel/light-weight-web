import { createSlice } from '@reduxjs/toolkit';
import { personalRecordInitialState } from '../states/personal-record.state';
import {
  retrievePersonalRecordsFailureReducer,
  retrievePersonalRecordsReducer,
  retrievePersonalRecordsSuccessReducer,
} from './personal-record.reducers';

export const personalRecordSlice = createSlice({
  name: 'personalRecord',
  initialState: personalRecordInitialState,
  reducers: {
    retrievePersonalRecords: retrievePersonalRecordsReducer,
    retrievePersonalRecordsSuccess: retrievePersonalRecordsSuccessReducer,
    retrievePersonalRecordsFailure: retrievePersonalRecordsFailureReducer,
  },
});

export const {
  retrievePersonalRecords,
  retrievePersonalRecordsSuccess,
  retrievePersonalRecordsFailure,
} = personalRecordSlice.actions;

export const personalRecordReducer = personalRecordSlice.reducer;
