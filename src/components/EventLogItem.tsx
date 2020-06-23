import React from 'react';
import { LogEmitter } from '../modules/LogEmitter';
import '../scss/EventLogItem.scss';

type EventLogItemProps = {
  item: LogEmitter.IEvent;
};

class EventLogItem extends React.Component<EventLogItemProps, {}> {
  private itemClasses = () => {
    return (
      ['event-log__item', `priority-${this.props.item.priority}`].join(' ')
    );
  };

  render() {
    return (
      <li className={this.itemClasses()}>
        <span className="date">
          {new Date(this.props.item.date).toLocaleTimeString()}:
        </span>
        <span className="event">{this.props.item.event}</span>
      </li>
    );
  }
}

export default EventLogItem;
