import { Route, Switch } from 'react-router-dom';
import Signin from './Components/Signin/Signin';
import Flights from './Components/Flights/Flights';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Signin />
        </Route>
        <Route path="/flights">
          <Flights />
        </Route>
      </Switch>
    </>
  );
}

export default App;
