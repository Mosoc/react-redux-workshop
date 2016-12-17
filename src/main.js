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
          Panel
        </div>
    )
  }
}

ReactDOM.render(<Panel />, document.getElementById('app'));
