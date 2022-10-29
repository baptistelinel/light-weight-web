import { Store } from 'redux';
import { InMemoryExerciseGateway } from '../../../../adapter/secondaries/exercise/in-memory-exercise.gateway';
import { exercises } from '../../../../adapter/secondaries/fixtures/exercise.fixture';
import { Dependencies } from '../../../../configurations/dependencies.interface';
import { inMemoryDependencies } from '../../../../configurations/in-memory.dependencies';
import { retrieveExercises } from '../../../redux/exercise/exercise.slice';
import { setStoreConfiguration } from '../../../redux/set-configuration-store';
import { subscribeOnReduxState } from '../../../redux/utils';

describe('Retrieve Exercises', () => {
  let store: Store;
  let dependencies: Dependencies;

  beforeEach(() => {
    dependencies = inMemoryDependencies;
    dependencies.exerciseGateway = new InMemoryExerciseGateway();
    store = setStoreConfiguration(dependencies);
  });

  it('should retrieve exercises', (done) => {
    store.dispatch(retrieveExercises());

    storeSubscription(done, () => {
      expect(store.getState().exercise.isLoading).toBeFalsy();
      expect(store.getState().exercise.exercises).toEqual(exercises);
      expect(store.getState().exercise.error).toEqual(undefined);
    });
  });

  const storeSubscription = (
    done: jest.DoneCallback,
    expectation: () => void,
  ) => subscribeOnReduxState(store, done, expectation);
});
