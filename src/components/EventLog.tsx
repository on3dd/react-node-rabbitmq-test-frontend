import React from 'react';
import '../scss/EventLog.scss';

class EventLog extends React.Component {
  private readonly events = [
    {
      event: 'Nothing happens.',
      date: '2020-06-22T13:27:09.658Z',
    },
    {
      event: 'Nothing happens.',
      date: '2020-06-22T13:27:10.658Z',
    },
    {
      event: 'Nothing happens.',
      date: '2020-06-22T13:27:11.658Z',
    },
    {
      event: 'Nothing happens.',
      date: '2020-06-22T13:27:12.658Z',
    },
    {
      event: 'Nothing happens.',
      date: '2020-06-22T13:27:13.658Z',
    },
    {
      event: 'Nothing happens.',
      date: '2020-06-22T13:27:14.658Z',
    },
    {
      event: 'Nothing is happening again.',
      date: '2020-06-22T13:27:15.658Z',
    },
    {
      event: 'As always nothing happens.',
      date: '2020-06-22T13:27:16.658Z',
    },
    {
      event: 'Vladimir Putin elected president of the Russian Federation.',
      date: '2020-06-22T13:27:17.658Z',
    },
  ];

  render() {
    return (
      <div className="event-log">
        <ul className="event-log__list">
          {this.events.map((item, idx) => (
            <li key={idx} className="event-log__item">
              <span className="date">{item.date}:</span>
              <span className="event">{item.event}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EventLog;
