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
          <Show number={1}/>
        </div>
    )
  }
}


class Show extends React.Component{
  render(){
    const  number = this.props.number;

    return (
      <div>{ number }</div>
    )
  }
}

ReactDOM.render(<Panel />, document.getElementById('app'));
