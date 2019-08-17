import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Form from './Form';
import './style.css';
import Counter from './Counter';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Rahul'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Counter />
        <p>
          Start editing to see some magic happen :)
        </p>

        <Form />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
