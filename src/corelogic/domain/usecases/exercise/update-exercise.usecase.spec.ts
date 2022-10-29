import { Store } from 'redux';
import { InMemoryExerciseGateway } from '../../../../adapter/secondaries/exercise/in-memory-exercise.gateway';
import { Dependencies } from '../../../../configurations/dependencies.interface';
import { inMemoryDependencies } from '../../../../configurations/in-memory.dependencies';
import { updateExercise } from '../../../redux/exercise/exercise.slice';
import { setStoreConfiguration } from '../../../redux/set-configuration-store';
import { subscribeOnReduxState } from '../../../redux/utils';

describe('Update Exercise', () => {
  let store: Store;
  let dependencies: Dependencies;

  beforeEach(() => {
    dependencies = inMemoryDependencies;
    dependencies.exerciseGateway = new InMemoryExerciseGateway();
    store = setStoreConfiguration(dependencies);
  });

  it('should uodate an exercise', (done) => {
    store.dispatch(
      updateExercise({ id: '1', exerciseUpdateDTO: { name: 'SQUAT 4 CT' } }),
    );

    storeSubscription(done, () => {
      expect(store.getState().exercise.isLoading).toBeFalsy();
      // expect(store.getState().exercise.exercises).toEqual([
      //   { id: '3', name: 'Squat 4 CT' },
      // ]);
      expect(store.getState().exercise.error).toEqual(undefined);
    });
  });

  const storeSubscription = (
    done: jest.DoneCallback,
    expectation: () => void,
  ) => subscribeOnReduxState(store, done, expectation);
});
