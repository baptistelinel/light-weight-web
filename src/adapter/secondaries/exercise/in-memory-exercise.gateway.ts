import { ExerciseGateway } from '../../../corelogic/domain/gateways/exercise.gateway';
import {
  Exercise,
  ExerciseName,
} from '../../../corelogic/domain/models/exercise.model';
import { ExerciseCreateDTO } from './exercise-create.dto';
import { ExerciseUpdateDTO } from './exercise-update.dto';

export class InMemoryExerciseGateway implements ExerciseGateway {
  exercises: Exercise[] = [
    {
      id: '1',
      name: ExerciseName.SQUAT,
    },
    {
      id: '2',
      name: ExerciseName.BENCH,
    },
  ];

  retrieveAll = async (): Promise<Exercise[]> => {
    return this.exercises;
  };

  create = async (exerciseToCreate: ExerciseCreateDTO): Promise<Exercise> => {
    const exercise: Exercise = { ...exerciseToCreate, id: '3' };
    if (
      this.exercises.find((exercise) => exercise.name === exerciseToCreate.name)
    ) {
      throw Error('Exercise already exists');
    }
    this.exercises = [...this.exercises, exercise];
    return exercise;
  };

  remove = async (id: string): Promise<Exercise> => {
    const exerciseToRemove = this.exercises.find(
      (exercise) => exercise.id === id,
    );
    if (undefined === exerciseToRemove) {
      throw new Error('Exercise not found');
    }
    const exerciseIndexToRemove = this.exercises.indexOf(exerciseToRemove);
    const copyExericses = [...this.exercises];
    copyExericses.splice(exerciseIndexToRemove, 1);
    this.exercises = copyExericses;
    return exerciseToRemove;
  };

  update = async (
    id: string,
    exerciseUpdate: ExerciseUpdateDTO,
  ): Promise<Exercise> => {
    const exerciseToUpdate = this.exercises.find(
      (exercise) => exercise.id === id,
    );
    if (undefined === exerciseToUpdate) {
      throw new Error('Exercise not found');
    }
    const indexOfExerciseToUpdate = this.exercises.indexOf(exerciseToUpdate);
    const copyExericses = [...this.exercises];
    copyExericses.splice(indexOfExerciseToUpdate, 1, {
      ...exerciseToUpdate,
      ...exerciseUpdate,
    });
    this.exercises = copyExericses;
    return this.exercises[indexOfExerciseToUpdate];
  };
}
