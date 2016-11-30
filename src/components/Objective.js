import React from 'react';
import KeyResult from './KeyResult';

export default class extends React.Component {
  static displayName = 'Objective';

  render() {
    const { title, keyResults } = this.props;

    return (
      <div className="col-xs-12 col-md-4">
        <div className="objective">
          <h2>{title}</h2>
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
