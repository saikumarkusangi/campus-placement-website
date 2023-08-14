import { createStore ,combineReducers,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { companiesReducer } from './reducers/companies';

const reducer = combineReducers({
    companies:companiesReducer
})

const middleware = [thunk]

const store = createStore(
     reducer,
     composeWithDevTools(applyMiddleware(...middleware))
)

export default store