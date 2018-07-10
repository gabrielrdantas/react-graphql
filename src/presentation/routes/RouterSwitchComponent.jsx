import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeRouterComponent from './HomeRouterComponent';

export default class RouterSwitchComponent extends React.Component {
    render() {
        return (
           <div>
                <Switch>
                    <Route path="/channel/:channelId" exact={true} component={HomeRouterComponent} />
                </Switch>
           </div>
       );
    }
}