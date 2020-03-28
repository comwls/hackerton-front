import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './_helpers';
import Routes from './routes';
import LayoutHeader from './components/common/LayoutHeader';
import LayoutFooter from './components/common/LayoutFooter';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import './App.scss';

function App() {
   
    return (
        <Router history={history}>
            <LayoutHeader />
            <Switch>
                <Route path="/login" name="login" component={LoginPage} />
                <Route path="/signup" name="signup" component={SignUpPage} />
                <div id="content">
                    {Routes.map((route, idx) => {
                        return (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => <route.component {...props} />}
                            />
                        );
                    })}
                </div>
            </Switch>
            <LayoutFooter />
        </Router>
    );
}

export default App;
