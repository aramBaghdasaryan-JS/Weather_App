import { Route, Switch, Redirect } from 'react-router-dom';
import Weather from './containers/Weather';

const App = () => (
    <Switch>
        <Route exact path="/" component={Weather}/>
        <Route path="*" component={() => <Redirect to="/"/>}/>
    </Switch>
);

export default App;
