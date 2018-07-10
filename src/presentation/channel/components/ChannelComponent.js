
import React from 'react';
import * as moment from 'moment';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import '../styles/channel.css';
import ajaxLoader from '../images/ajax-loader.gif';

const GET_SIMULCAST = gql`
query getById($id: Int!) {
  slotsRange(channelId: $id, startDate: "2018-07-09",  endDate: "2018-07-10") {
    live,
    scheduledDate,
    channel {
      name
      color
    },
    title {
      aka
    },
    event {
      duration
    }
  }
}
`;

export default function ChannelComponent(props) {
return (
    <Query 
      query={GET_SIMULCAST} 
      variables={{id: props.channelId}}
    >
      {({ loading, error, data }) => {  
        if (loading) {
          return (
            <div className='loading'>
              <img src={ajaxLoader} />
            </div>
          );
        }
        if (error) {
          return <h1>ERROR</h1>;
        }

        let nowTimeInMilliseconds = (new Date().getHours() * 60 * 60 * 1000) + (new Date().getMinutes() * 60 * 1000);
        
        let isProgramActual = false;
        let flag = false;

        let infoChannel = data.slotsRange.map((item, key ) => {

            let finalHourProgram = parseInt(moment(item.scheduledDate).format('HH')) + parseInt(item.event.duration.split(':')[0]);
            let finalMinutesProgram = parseInt(moment(item.scheduledDate).format('mm')) + parseInt(item.event.duration.split(':')[1]);
            let totalTimeProgramInMilliseconds = (finalHourProgram * 60 * 60 * 1000) + (finalMinutesProgram * 60 * 1000);
            
            if (flag === true) {
              isProgramActual = false;
            } 
            else {
              isProgramActual = totalTimeProgramInMilliseconds >= nowTimeInMilliseconds;
              flag = isProgramActual ? true : false;
            }

            return ( 
              <tr 
                key={key} 
                className={isProgramActual ? 'line-channel-live actual' : 'line-channel-live'}
                style={{ backgroundColor: isProgramActual ? '#ffe900' : item.channel.color }}>
                <td>{moment(item.scheduledDate).format('DD/MM/YYYY HH:mm')}</td>
                <td>{item.title ? item.title.aka : ''}</td>
                <td>{item.event.duration || ''}</td>
                <td>{item.live ? 'Ao Vivo' : 'Agora no ar'}</td>
              </tr>
            );

        });

        return (
          <div 
            className='channel-router'>
            <h2 style={{ color: data.slotsRange[0].channel.color }}> {data.slotsRange[0].channel.name}</h2>
            <table cellSpacing="0">
              <thead>
                <tr>
                  <th>Horário</th>
                  <th>Nome</th>
                  <th>Duração</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
              { infoChannel }
              </tbody>
            </table>
          </div>
        );
        
      }}
    </Query>
);

};