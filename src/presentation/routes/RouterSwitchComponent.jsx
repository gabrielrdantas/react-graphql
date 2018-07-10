import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeRouterComponent from './HomeRouterComponent';

export default class RouterSwitchComponent extends React.Component {
    render() {
        return (
           <div>
                <Switch>
                    <Route path="/:channelId?" component={HomeRouterComponent} />
                </Switch>
           </div>
       );
    }
}