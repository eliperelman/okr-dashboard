import React from 'react';
import { Tooltip } from 'reactstrap';
import Score from './Score';
import Info from './Info';

export default class extends React.Component {
  static displayName = 'KeyResult';

  constructor(props) {
    super(props);
    this.state = { tooltipOpen: false };
  }

  toggle() {
    this.setState({ tooltipOpen: !this.state.tooltipOpen });
  }

  render() {
    const { result } = this.props;
    const scores = Object.keys(result.scoring);
    const index = scores.indexOf(result.score);
    const id = `info-${result.name.replace(/\s/g, '-')}`;
    let status = 'empty';

    if (index !== -1) {
      if (scores[scores.length - 1] === result.score) {
        status = 'achieved';
      } else {
        status = 'in-progress';
      }
    }

    return (
      <div className="col-xs">
        <h3>
          {result.name} <Info id={id} />
          {result.description && (
            <Tooltip
              autohide={true}
              delay={0}
              target={id}
              isOpen={this.state.tooltipOpen}
              tether={{ constraints: [{ to: 'scrollParent', pin: true }] }}
              toggle={() => this.toggle()}>
              {result.description}
            </Tooltip>
          )}
        </h3>
        <div className={`row scoring flex-items-xs-left ${status}`}>
          {scores.map((score, key) => (
            <Score
              key={key}
              id={`score-${result.name.replace(/\s/g, '-')}-${key}`}
              score={score}
              description={result.scoring[score]}
              achieved={key <= index} />
          ))}
        </div>
      </div>
    );
  }
}
