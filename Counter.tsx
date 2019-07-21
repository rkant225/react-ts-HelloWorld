import * as React from 'react';

interface ICounterProps{

}

interface ICounterState{
  count: number
}
export default class Counter extends React.Component<ICounterProps,ICounterState> {
  constructor(props){
    super(props);    
    this.state={count:0};
  }

  private increment(){
    this.setState({count: (this.state.count + 1)});
  }

  private decrement(){
    this.setState({ count: (this.state.count - 1)});
  }

  render () {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>{this.increment()}}>+</button>
        <button onClick={()=>{this.decrement()}}>-</button>
      </div>
    );
  }
}