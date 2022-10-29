import { PersonalRecord } from '../../domain/models/personal-record.model';

export interface PersonalRecordState {
  isLoading: boolean;
  personalRecords: PersonalRecord[];
  error?: string;
}

export const personalRecordInitialState: PersonalRecordState = {
  isLoading: false,
  personalRecords: [],
};
