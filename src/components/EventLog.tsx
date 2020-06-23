import React from 'react';
import io from 'socket.io-client';
import { LogEmitter } from '../modules/LogEmitter';
import EventLogItem from './EventLogItem';
import '../scss/EventLog.scss';

type EventLogState = {
  events: LogEmitter.Event[];
};

class EventLog extends React.Component<{}, EventLogState> {
  private ulRef = React.createRef<HTMLUListElement>();

  constructor(props: any) {
    super(props);
    this.state = { events: [] };
  }

  async componentDidMount() {
    await this.initWS();
    this.scrollList();
  }

  private initWS = () => {
    return new Promise<void>((resolve) => {
      const socket = io('ws://localhost:8000', {
        // transports: ['websocket'],
      });

      socket.on('message', this.onmessage);

      resolve();
    });
  };

  private onmessage = (message: string) => {
    try {
      const event = JSON.parse(message);

      this.setState((state: EventLogState) => ({
        events: [...state.events, event],
      }));

      this.scrollList();
    } catch (err) {
      console.error(err);
    }
  };

  private scrollList = () => {
    const node = this.ulRef.current;
    if (node) {
      node.scrollTop = node.scrollHeight;
    }
  };

  render() {
    return (
      <div className="event-log">
        <ul ref={this.ulRef} className="event-log__list">
          {this.state.events.map((item, idx) => (
            <EventLogItem item={item} key={idx} />
          ))}
        </ul>
      </div>
    );
  }
}

export default EventLog;
