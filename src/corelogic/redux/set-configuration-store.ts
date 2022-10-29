import { configureStore } from '@reduxjs/toolkit';
import {
  combineEpics,
  createEpicMiddleware,
} from 'redux-observable-es6-compat';
import { dependencies } from '../../configurations/dependencies';
import { Dependencies } from '../../configurations/dependencies.interface';
import { createExerciseEpic } from '../domain/usecases/exercise/create-exercise.usecase';
import { removeExerciseEpic } from '../domain/usecases/exercise/remove-exercise.usecase';
import { retrieveExercisesEpic } from '../domain/usecases/exercise/retrieve-exercises.usecase';
import { updateExerciseEpic } from '../domain/usecases/exercise/update-exercise.usecase';
import { retrievePersonalRecordsEpic } from '../domain/usecases/personal-record/retrieve-personal-record.usecase';
import { createTrainingEpic } from '../domain/usecases/training/create-training.usecase';
import { removeTrainingEpic } from '../domain/usecases/training/remove-training.usecase';
import { retrieveTrainingsEpic } from '../domain/usecases/training/retrieve-trainings.usecase';
import { updateTrainingEpic } from '../domain/usecases/training/update-training.usecase';
import { exerciseReducer } from './exercise/exercise.slice';
import { personalRecordReducer } from './personal-record/personal-record.slice';
import { trainingReducer } from './training/training.slice';

export const setStoreConfiguration = (dependencies: Dependencies) => {
  const rootEpics = combineEpics(
    retrieveExercisesEpic,
    createExerciseEpic,
    removeExerciseEpic,
    updateExerciseEpic,
    createTrainingEpic,
    retrieveTrainingsEpic,
    updateTrainingEpic,
    removeTrainingEpic,
    retrievePersonalRecordsEpic,
  );
  const epicMiddleware = createEpicMiddleware({ dependencies });
  const store = configureStore({
    reducer: {
      exercise: exerciseReducer,
      training: trainingReducer,
      personalRecord: personalRecordReducer,
    },
    middleware: [epicMiddleware],
  });
  epicMiddleware.run(rootEpics);
  return store;
};

export const store = setStoreConfiguration(dependencies);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
