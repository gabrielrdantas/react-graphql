import * as React from 'react';
import ChannelComponent from '../channel/components/ChannelComponent';
import FilterComponent from '../filter/components/FilterComponent';

class HomeRouteComponent extends React.Component {
    render() {
        
        const CHANNEL_ID = this.props.match.params.channelId ? this.props.match.params.channelId : 1;

        return (
            <div>
                <FilterComponent 
                    channelId={CHANNEL_ID} />
                <ChannelComponent 
                    channelId={CHANNEL_ID} />
            </div>
         );
     }
 }

export default HomeRouteComponent;