import { Store } from 'redux';
import { InMemoryTrainingGateway } from '../../../../adapter/secondaries/training/in-memory-training.gateway';
import { Dependencies } from '../../../../configurations/dependencies.interface';
import { inMemoryDependencies } from '../../../../configurations/in-memory.dependencies';
import { setStoreConfiguration } from '../../../redux/set-configuration-store';
import { removeTraining } from '../../../redux/training/training.slice';
import { subscribeOnReduxState } from '../../../redux/utils';

describe('Remove Training', () => {
  let store: Store;
  let dependencies: Dependencies;

  beforeEach(() => {
    dependencies = inMemoryDependencies;
    dependencies.trainingGateway = new InMemoryTrainingGateway();
    store = setStoreConfiguration(dependencies);
  });

  it('should delete a training', (done) => {
    store.dispatch(removeTraining('1'));

    storeSubscription(done, () => {
      expect(store.getState().training.isLoading).toBeFalsy();
      expect(store.getState().training.trainings).toEqual([]);
      expect(store.getState().training.error).toEqual(undefined);
    });
  });

  it('should fail to delete a training because unknown id', (done) => {
    store.dispatch(removeTraining('unknown id'));

    storeSubscription(done, () => {
      expect(store.getState().training.isLoading).toBeFalsy();
      expect(store.getState().training.trainings).toEqual([]);
      expect(store.getState().training.error).toEqual(
        'Failed to delete training',
      );
    });
  });

  const storeSubscription = (
    done: jest.DoneCallback,
    expectation: () => void,
  ) => subscribeOnReduxState(store, done, expectation);
});
