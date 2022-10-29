import { Store } from 'redux';
import { InMemoryExerciseGateway } from '../../../../adapter/secondaries/exercise/in-memory-exercise.gateway';
import { Dependencies } from '../../../../configurations/dependencies.interface';
import { inMemoryDependencies } from '../../../../configurations/in-memory.dependencies';
import { removeExercise } from '../../../redux/exercise/exercise.slice';
import { setStoreConfiguration } from '../../../redux/set-configuration-store';
import { subscribeOnReduxState } from '../../../redux/utils';

describe('Remove Exercise', () => {
  let store: Store;
  let dependencies: Dependencies;

  beforeEach(() => {
    dependencies = inMemoryDependencies;
    dependencies.exerciseGateway = new InMemoryExerciseGateway();
    store = setStoreConfiguration(dependencies);
  });

  it('should delete an exercise', (done) => {
    store.dispatch(removeExercise('1'));

    storeSubscription(done, () => {
      expect(store.getState().exercise.isLoading).toBeFalsy();
      expect(store.getState().exercise.exercises).toEqual([]);
      expect(store.getState().exercise.error).toEqual(undefined);
    });
  });

  it('should fail to delete an exercise because unknown id', (done) => {
    store.dispatch(removeExercise('unknown id'));

    storeSubscription(done, () => {
      expect(store.getState().exercise.isLoading).toBeFalsy();
      expect(store.getState().exercise.exercises).toEqual([]);
      expect(store.getState().exercise.error).toEqual(
        'Failed to delete exercise',
      );
    });
  });

  const storeSubscription = (
    done: jest.DoneCallback,
    expectation: () => void,
  ) => subscribeOnReduxState(store, done, expectation);
});
