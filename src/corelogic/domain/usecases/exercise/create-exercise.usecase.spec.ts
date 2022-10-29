import { Store } from 'redux';
import { InMemoryExerciseGateway } from '../../../../adapter/secondaries/exercise/in-memory-exercise.gateway';
import { exerciseCreateDTO } from '../../../../adapter/secondaries/fixtures/exercise.fixture';
import { Dependencies } from '../../../../configurations/dependencies.interface';
import { inMemoryDependencies } from '../../../../configurations/in-memory.dependencies';
import { createExercise } from '../../../redux/exercise/exercise.slice';
import { setStoreConfiguration } from '../../../redux/set-configuration-store';
import { subscribeOnReduxState } from '../../../redux/utils';

describe('Create Exercise', () => {
  let store: Store;
  let dependencies: Dependencies;

  beforeEach(() => {
    dependencies = inMemoryDependencies;
    dependencies.exerciseGateway = new InMemoryExerciseGateway();
    store = setStoreConfiguration(dependencies);
  });

  it('should create an exercise', (done) => {
    store.dispatch(createExercise(exerciseCreateDTO));

    storeSubscription(done, () => {
      expect(store.getState().exercise.isLoading).toBeFalsy();
      expect(store.getState().exercise.exercises).toEqual([
        { id: '3', name: 'Squat 2 CT' },
      ]);
      expect(store.getState().exercise.error).toEqual(undefined);
    });
  });

  it('should fail to create an exercise because exercise name exists', (done) => {
    store.dispatch(createExercise({ name: 'SQUAT' }));

    storeSubscription(done, () => {
      expect(store.getState().exercise.isLoading).toBeFalsy();
      expect(store.getState().exercise.exercises).toEqual([]);
      expect(store.getState().exercise.error).toEqual(
        'Failed to create exercise',
      );
    });
  });

  const storeSubscription = (
    done: jest.DoneCallback,
    expectation: () => void,
  ) => subscribeOnReduxState(store, done, expectation);
});
