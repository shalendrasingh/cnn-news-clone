import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { BusinessReducer, HeadlinesReducer } from './Business/reducer'
import thunk from 'redux-thunk'
import { StyleReducer } from './styles/reducer'
import { WorldReducer } from './world/reducer'
import { reducer as healthReducer } from './health/reducer'
import { reducer as homeReducer } from './home/reducer'

import { FinanceReducer } from '../Redux/Business/Finance/financeReducer'
import { EntertainmentReducer } from '../Redux/Entertainment/reducer'

import { SearchReducer } from './SearchPage/reducer'

import { reducer as sportsReducer } from './sports/reducer'

import { regReducer } from './registration/reducer'
import { authReducer } from './auth/reducer'
import { ProfileReducer } from './profile/reducer'

const rootReducer = combineReducers({
  world: WorldReducer,
  style: StyleReducer,
  health: healthReducer,
  home: homeReducer,
  sports: sportsReducer,
  business: BusinessReducer,
  finances: FinanceReducer,
  headline: HeadlinesReducer,
  search: SearchReducer,
  entertainment: EntertainmentReducer,

  registration: regReducer,
  auth: authReducer,

  profile: ProfileReducer,
})

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

export const store = createStore(rootReducer, enhancer)
// console.log(store.getState())
