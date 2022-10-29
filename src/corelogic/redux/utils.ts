import { Store } from 'redux';

export const subscribeOnReduxState = (
  store: Store,
  done: jest.DoneCallback,
  expectation: () => void,
) => {
  const unsubscribe = store.subscribe(() => {
    try {
      expectation();
      done();
    } catch (e) {
      done(e);
    } finally {
      unsubscribe();
    }
  });
};
