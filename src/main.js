import React from 'react';
import ReactDOM from 'react-dom';

class Panel extends React.Component{
  constructor(){
    super();
    this.state = {
        number: 0
    }
  }

  render(){
    return(
        <div>
          <Show num={this.state.number}/>
        </div>
    )
  }
}


class Show extends React.Component{
  render(){
    const  { num }= this.props;

    return (
      <div>{ num }</div>
    )
  }
}


ReactDOM.render(<Panel />, document.getElementById('app'));
