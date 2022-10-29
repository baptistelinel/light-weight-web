import { Store } from 'redux';
import { trainingCreateDTO } from '../../../../adapter/secondaries/fixtures/training.fixture';
import { inMemoryDependencies } from '../../../../configurations/in-memory.dependencies';
import { InMemoryTrainingGateway } from '../../../../adapter/secondaries/training/in-memory-training.gateway';
import { Dependencies } from '../../../../configurations/dependencies.interface';
import { setStoreConfiguration } from '../../../redux/set-configuration-store';
import { createTraining } from '../../../redux/training/training.slice';
import { subscribeOnReduxState } from '../../../redux/utils';

describe('Create Training', () => {
  let store: Store;
  let dependencies: Dependencies;

  beforeEach(() => {
    dependencies = inMemoryDependencies;
    dependencies.trainingGateway = new InMemoryTrainingGateway();
    store = setStoreConfiguration(dependencies);
  });

  it('should create a training', (done) => {
    const date = new Date('2022-06-03');
    store.dispatch(createTraining(trainingCreateDTO));

    storeSubscription(done, () => {
      expect(store.getState().training.isLoading).toBeFalsy();
      expect(store.getState().training.trainings).toEqual([
        { ...trainingCreateDTO, id: '100', date, totalWeight: 235 },
      ]);
      expect(store.getState().training.error).toEqual(undefined);
    });
  });

  const storeSubscription = (
    done: jest.DoneCallback,
    expectation: () => void,
  ) => subscribeOnReduxState(store, done, expectation);
});
