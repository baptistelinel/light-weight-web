import { ExerciseCreateDTO } from '../../../adapter/secondaries/exercise/exercise-create.dto';
import { ExerciseUpdateDTO } from '../../../adapter/secondaries/exercise/exercise-update.dto';
import { Exercise } from '../models/exercise.model';

export interface ExerciseGateway {
  retrieveAll(): Promise<Exercise[]>;
  create(exerciseToCreate: ExerciseCreateDTO): Promise<Exercise>;
  remove(id: string): Promise<Exercise>;
  update(id: string, exerciseUpdateDTO: ExerciseUpdateDTO): Promise<Exercise>;
}
