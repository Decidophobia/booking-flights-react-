import { all, call, put, takeEvery } from 'redux-saga/effects';
import { GET_FLIGHT } from './actionTypes';
import { getFlightsAC } from './actionCreators';

async function fetchFlights(dispatch) {
  const response = await fetch(
    'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/RUB/en-US/SVO-sky/JFK-sky/anytime?inboundpartialdate=anytime',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'd07f5dd8a5mshc4767386195d8e1p1bb6fbjsnc2f35ece3ba0',
        'x-rapidapi-host':
          'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      },
    }
  );
  const result = await response.json();
  dispatch(getFlightsAC(result));
}

function* getFlightWorker(action) {
  const flights = yield call(fetchFlights);
  yield put(getFlightsAC(flights));
}

function* watcher() {
  yield takeEvery(GET_FLIGHT, getFlightWorker);
}

export default function* mySaga() {
  yield all([watcher()]);
}
