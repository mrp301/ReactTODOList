import { createStore } from 'redux';
import reducer from '../reducers/index';

export default function configureStore() {
  // createStoreの第一引数として渡すことでstore中stateが更新できる。
  const store = createStore(reducer);
  return store;
}