import axios from 'axios';
import { TrainingGateway } from '../../../corelogic/domain/gateways/training.gateway';
import { Training } from '../../../corelogic/domain/models/training.model';
import { TrainingCreateDTO } from './training-create.dto';
import { TrainingUpdateDTO } from './training-update.dto';

const headers = { 'Content-Type': 'application/json' };
const api_url = process.env.REACT_APP_API_URL;

export class ApiTrainingGateway implements TrainingGateway {
  retrieveAll = async (): Promise<Training[]> => {
    const response = await axios.get<Training[]>(`${api_url}/trainings`, {
      headers,
    });
    return response.data;
  };

  create = async (trainingToCreate: TrainingCreateDTO): Promise<Training> => {
    const response = await axios.post<Training>(
      `${api_url}/trainings`,
      trainingToCreate,
      {
        headers,
      },
    );
    return response.data;
  };

  update = async (
    id: string,
    trainingUpdates: TrainingUpdateDTO,
  ): Promise<Training> => {
    const response = await axios.patch(
      `${api_url}/trainings/${id}`,
      trainingUpdates,
      { headers },
    );
    return response.data;
  };

  remove = async (id: string): Promise<Training> => {
    const response = await axios.delete<Training>(
      `${api_url}/trainings/${id}`,
      {
        headers,
      },
    );
    return response.data;
  };
}
