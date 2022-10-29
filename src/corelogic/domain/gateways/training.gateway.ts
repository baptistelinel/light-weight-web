import { TrainingCreateDTO } from '../../../adapter/secondaries/training/training-create.dto';
import { TrainingUpdateDTO } from '../../../adapter/secondaries/training/training-update.dto';
import { Training } from '../models/training.model';

export interface TrainingGateway {
  create(trainingToCreate: TrainingCreateDTO): Promise<Training>;
  retrieveAll(): Promise<Training[]>;
  update(id: string, trainingUpdates: TrainingUpdateDTO): Promise<Training>;
  remove(id: string): Promise<Training>;
}
