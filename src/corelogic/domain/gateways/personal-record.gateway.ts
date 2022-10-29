import { PersonalRecord } from '../models/personal-record.model';

export interface PersonalRecordGateway {
  retrieveAll(): Promise<PersonalRecord[]>;
}
