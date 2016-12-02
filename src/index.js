import React from 'react';
import { render } from 'react-dom';
import Objective from './components/Objective';
import data from './okrs_sample.json';
import 'bootstrap/dist/css/bootstrap-flex.min.css';
import './global.css';
import logoUrl from './logo.png';

render((
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs">
        <img src={logoUrl} className="img-fluid logo" />
        <hr className="hidden-md-up" />
      </div>
    </div>
    <div className="row">
      {data.objectives.map((objective, key) => (
        <Objective
          key={key}
          title={objective.name}
          keyResults={objective.results}
          goals={objective.okrs} />
      ))}
    </div>
  </div>
), document.getElementById('root'));
