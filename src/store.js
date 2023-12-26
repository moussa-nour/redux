import { createStore } from 'redux';
import rootReducer from './redux/reducers.js';

// Create the Redux store with the root reducer
export default createStore(rootReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Export the configured Redux store for use in the application
