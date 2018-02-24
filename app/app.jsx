import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="container">
      <h1>Hello World xiahaifeng00.</h1>
    </div>
  );
}

const app = document.createElement('div');  // eslint-disable-line
document.body.appendChild(app);  // eslint-disable-line
ReactDOM.render(<App />, app);
