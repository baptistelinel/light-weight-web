import { PersonalRecordGateway } from '../../../corelogic/domain/gateways/personal-record.gateway';
import { PersonalRecord } from '../../../corelogic/domain/models/personal-record.model';

export class ApiPersonalRecordGateway implements PersonalRecordGateway {
  retrieveAll(): Promise<PersonalRecord[]> {
    throw new Error('Method not implemented.');
  }
}
