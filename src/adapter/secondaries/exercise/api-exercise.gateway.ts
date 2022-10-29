import axios from 'axios';
import { ExerciseGateway } from '../../../corelogic/domain/gateways/exercise.gateway';
import { Exercise } from '../../../corelogic/domain/models/exercise.model';
import { ExerciseCreateDTO } from './exercise-create.dto';
import { ExerciseUpdateDTO } from './exercise-update.dto';

const headers = { 'Content-Type': 'application/json' };
const api_url = process.env.REACT_APP_API_URL;

export class ApiExerciseGateway implements ExerciseGateway {
  create = async (exerciseToCreate: ExerciseCreateDTO): Promise<Exercise> => {
    const response = await axios.post<Exercise>(
      `${api_url}/exercises`,
      exerciseToCreate,
      {
        headers,
      },
    );
    return response.data;
  };

  retrieveAll = async (): Promise<Exercise[]> => {
    const response = await axios.get<Exercise[]>(`${api_url}/exercises`, {
      headers,
    });
    return response.data;
  };

  remove = async (id: string): Promise<Exercise> => {
    const response = await axios.delete<Exercise>(
      `${api_url}/exercises/${id}`,
      {
        headers,
      },
    );
    return response.data;
  };

  update = async (
    id: string,
    exerciseUpdate: ExerciseUpdateDTO,
  ): Promise<Exercise> => {
    const response = await axios.patch(
      `${api_url}/exercises/${id}`,
      exerciseUpdate,
      { headers },
    );
    return response.data;
  };
}
