import React from 'react';
import io from 'socket.io-client';
import { LogEmitter } from '../modules/LogEmitter';

import '../scss/EventLog.scss';

class EventLog extends React.Component {
  private ulRef = React.createRef<HTMLUListElement>();

  componentDidMount() {
    const node = this.ulRef.current;
    if (node) {
      node.scrollTop = node.scrollHeight;
    }

    const socket = io('http://localhost:8000', {
      transports: ['websocket'],
    });

    socket.on('message', (message: string) => {
      console.log('message:', message);
    });
  }

  private itemClasses(item: LogEmitter.IEvent) {
    return ['event-log__item', `priority-${item.priority}`].join(' ');
  }

  render() {
    return (
      <div className="event-log">
        <ul ref={this.ulRef} className="event-log__list">
          {this.events.map((item, idx) => (
            <li key={idx} className={this.itemClasses(item)}>
              <span className="date">{item.date.toLocaleTimeString()}:</span>
              <span className="event">{item.event}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  private readonly events: LogEmitter.Event[] = [
    {
      event: 'Nothing happens.',
      date: new Date('2020-06-22T13:27:10.658Z'),
      priority: 0,
    },
    {
      event: 'Nothing happens.',
      date: new Date('2020-06-22T13:27:11.658Z'),
      priority: 0,
    },
    {
      event: 'Nothing happens.',
      date: new Date('2020-06-22T13:27:12.658Z'),
      priority: 0,
    },
    {
      event: 'Nothing happens.',
      date: new Date('2020-06-22T13:27:13.658Z'),
      priority: 0,
    },
    {
      event: 'Nothing happens.',
      date: new Date('2020-06-22T13:27:14.658Z'),
      priority: 0,
    },
    {
      event: 'Nothing is happening again.',
      date: new Date('2020-06-22T13:27:15.658Z'),
      priority: 0,
    },
    {
      event: 'As always nothing happens.',
      date: new Date('2020-06-22T13:27:16.658Z'),
      priority: 0,
    },
    {
      event: 'UFO just flew by.',
      date: new Date('2020-06-22T13:27:17.658Z'),
      priority: 1,
    },
    {
      event: 'Vladimir Putin elected president of the Russian Federation.',
      date: new Date('2020-06-22T13:27:18.658Z'),
      priority: 2,
    },
  ];
}

export default EventLog;
