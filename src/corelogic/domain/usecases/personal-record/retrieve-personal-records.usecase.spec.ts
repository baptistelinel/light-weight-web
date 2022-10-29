import { Store } from 'redux';
import { InMemoryPersonalRecordGateway } from '../../../../adapter/secondaries/personal-record/in-memory-personal-record.gateway';
import { Dependencies } from '../../../../configurations/dependencies.interface';
import { inMemoryDependencies } from '../../../../configurations/in-memory.dependencies';
import { retrievePersonalRecords } from '../../../redux/personal-record/personal-record.slice';
import { setStoreConfiguration } from '../../../redux/set-configuration-store';
import { subscribeOnReduxState } from '../../../redux/utils';

describe('Retrieve Personal Records', () => {
  let store: Store;
  let dependencies: Dependencies;

  beforeEach(() => {
    dependencies = inMemoryDependencies;
    dependencies.personalRecordGateway = new InMemoryPersonalRecordGateway();
    store = setStoreConfiguration(dependencies);
  });

  it('should retrieve perosnal records', (done) => {
    const date = new Date('2022-06-03');
    store.dispatch(retrievePersonalRecords());

    storeSubscription(done, () => {
      expect(store.getState().personalRecord.isLoading).toBeFalsy();
      expect(store.getState().personalRecord.personalRecords).toEqual([
        {
          id: '1',
          date,
          exercise: {
            id: '1',
            name: 'SQUAT',
            repetitions: 1,
            weight: 140,
            rpe: 10,
          },
        },
        {
          id: '2',
          date,
          exercise: {
            id: '2',
            name: 'BENCH',
            repetitions: 1,
            weight: 90,
            rpe: 10,
          },
        },
        {
          id: '3',
          date,
          exercise: {
            id: '3',
            name: 'DEADLIFT',
            repetitions: 1,
            weight: 180,
            rpe: 10,
          },
        },
      ]);
      expect(store.getState().personalRecord.error).toEqual(undefined);
    });
  });

  const storeSubscription = (
    done: jest.DoneCallback,
    expectation: () => void,
  ) => subscribeOnReduxState(store, done, expectation);
});
