import React from 'react';
import { render } from 'react-dom';
import Objective from './components/Objective';
import okrs from './okrs_sample.json';
import 'bootstrap/dist/css/bootstrap-flex.min.css';
import './global.css';
import logoUrl from './logo.png';

render((
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs">
        <h1><img src={logoUrl} /> Release and Productivity OKRs<hr /></h1>
      </div>
    </div>
    <div className="row">
      {okrs.objectives.map(({ name, results }, key) => (
        <Objective key={key} title={name} keyResults={results} />
      ))}
    </div>
  </div>
), document.getElementById('root'));
