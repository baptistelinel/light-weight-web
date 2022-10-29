import { Store } from 'redux';
import { InMemoryExerciseGateway } from '../../../../adapter/secondaries/exercise/in-memory-exercise.gateway';
import { Dependencies } from '../../../../configurations/dependencies.interface';
import { inMemoryDependencies } from '../../../../configurations/in-memory.dependencies';
import { setStoreConfiguration } from '../../../redux/set-configuration-store';
import { updateTraining } from '../../../redux/training/training.slice';
import { subscribeOnReduxState } from '../../../redux/utils';

describe('Update Training', () => {
  let store: Store;
  let dependencies: Dependencies;

  beforeEach(() => {
    dependencies = inMemoryDependencies;
    dependencies.exerciseGateway = new InMemoryExerciseGateway();
    store = setStoreConfiguration(dependencies);
  });

  it('should uodate a training', (done) => {
    store.dispatch(
      updateTraining({
        id: '1',
        trainingUpdateDTO: { name: 'New training name' },
      }),
    );

    storeSubscription(done, () => {
      expect(store.getState().training.isLoading).toBeFalsy();
      // expect(store.getState().training.trainings).toEqual([]);
      expect(store.getState().training.error).toEqual(undefined);
    });
  });

  const storeSubscription = (
    done: jest.DoneCallback,
    expectation: () => void,
  ) => subscribeOnReduxState(store, done, expectation);
});
