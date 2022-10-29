import { Store } from 'redux';
import { trainings } from '../../../../adapter/secondaries/fixtures/training.fixture';
import { InMemoryTrainingGateway } from '../../../../adapter/secondaries/training/in-memory-training.gateway';
import { Dependencies } from '../../../../configurations/dependencies.interface';
import { inMemoryDependencies } from '../../../../configurations/in-memory.dependencies';
import { setStoreConfiguration } from '../../../redux/set-configuration-store';
import { retrieveTrainings } from '../../../redux/training/training.slice';
import { subscribeOnReduxState } from '../../../redux/utils';

describe('Retrieve Trainings', () => {
  let store: Store;
  let dependencies: Dependencies;

  beforeEach(() => {
    dependencies = inMemoryDependencies;
    dependencies.trainingGateway = new InMemoryTrainingGateway();
    store = setStoreConfiguration(dependencies);
  });

  it('should retrieve trainings', (done) => {
    store.dispatch(retrieveTrainings());

    storeSubscription(done, () => {
      expect(store.getState().training.isLoading).toBeFalsy();
      expect(store.getState().training.trainings).toEqual(trainings);
      expect(store.getState().training.error).toEqual(undefined);
    });
  });

  const storeSubscription = (
    done: jest.DoneCallback,
    expectation: () => void,
  ) => subscribeOnReduxState(store, done, expectation);
});
