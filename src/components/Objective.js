import React from 'react';
import KeyResult from './KeyResult';
import Label from './Label';

export default class extends React.Component {
  static displayName = 'Objective';

  render() {
    const { title, keyResults, goals } = this.props;

    return (
      <div className="col-xs-12 col-md-4">
        <div className="objective">
          <h2>{title}</h2>
          {goals.map((goal, key) => (
            <Label key={key}>{goal}</Label>
          ))}
          <hr />
          {keyResults.map((keyResult, key) => (
            <div className="row" key={key}>
              <KeyResult result={keyResult} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
